import "reflect-metadata";
import "dotenv/config";

import express from "express";
import expressPlayground from "graphql-playground-middleware-express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { createYoga } from "graphql-yoga";

import { db } from "./data-source";
import { __port__, __prod__ } from "./constants";
import { genSchema } from "./resolvers";
import { verify } from "jsonwebtoken";
import { User } from "./entity/User";
import { html, createRefreshToken, createAccessToken, context } from "./utils";

db.initialize()
  .then(async () => {
    const app = express();

    const schema = await genSchema();

    const server = createYoga({
      schema,
      graphqlEndpoint: "/api",
    });

    app.use(cors(), bodyParser.json(), cookieParser());

    app.use("/api", server);

    app.use(
      "/playground",
      expressPlayground({
        endpoint: "/api",
      })
    );

    app.get("/", (_req, res) => {
      res.send(html);
    });

    app.post("/jid_refresh", async (req, res) => {
      const token = req.cookies.jid;
      if (!token) {
        return res.send({
          ok: false,
          accessToken: "",
          data: "Token doesn't exist",
        });
      }

      let payload: any = null;

      try {
        payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
      } catch (error) {
        return res.send({
          ok: false,
          accessToken: "",
          data: "Token is invalid",
        });
      }

      const user = await User.findOne({ where: { id: payload.userId } });

      if (!user) {
        return res.send({
          ok: false,
          accessToken: "",
          data: "User doesn't exist",
        });
      }

      if (user.tokenVer != payload.tokenVer) {
        return res.send({
          ok: false,
          accessToken: "",
          data: "token version is different",
        });
      }

      res.cookie("jid", await createRefreshToken(user!), {
        httpOnly: true,
        sameSite: "lax",
        path: "/jid_refresh",
      });
      return res.send({ ok: true, accessToken: await createAccessToken(user) });
    });

    app.listen(__port__, () => {
      console.log(`🚀 Server live at http://localhost:${__port__}`);
    });
  })
  .catch((error) => console.log(error));
