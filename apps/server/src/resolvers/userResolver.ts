import {
  Resolver,
  Query,
  Arg,
  Mutation,
  Ctx,
  UseMiddleware,
} from "type-graphql";
import argon from "argon2";
import { User } from "../entity/User";
import { UserResponse } from "../entity/ReturnFields";
import {
  isAuth,
  context,
  handleRegister,
  handleLogin,
  createRefreshToken,
  createAccessToken,
} from "../utils";
import { db } from "../data-source";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async Users() {
    const users = await User.find();
    return users;
  }

  @Query(() => Boolean)
  @UseMiddleware(isAuth)
  async isAuth(@Ctx() { req, res, payload }: context) {
    console.log(payload);
    return payload?.userId !== undefined;
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  async uid(@Ctx() { req, res, payload }: context) {
    return payload?.userId || "";
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async logOutOfAllSessions(@Ctx() { req, res, payload }: context) {
    const id = payload?.userId!;
    console.log(id);
    await db.getRepository(User).increment({ id }, "tokenVer", 2);
    return true;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("username") username: string,
    @Arg("displayname") displayname: string,
    @Ctx() { req, res }: context
  ): Promise<UserResponse> {
    const hashedPassword = await argon.hash(password);
    const { errors } = await handleRegister(email, username);

    if (errors.length != 0) return { errors, accessToken: "" };

    const user = new User();
    user.email = email;
    user.displayname = displayname;
    user.username = username;
    user.password = hashedPassword;

    await User.insert(user);

    res.cookie("jid", await createRefreshToken(user!), {
      httpOnly: true,
      sameSite: "lax",
      path: "/jid_refresh",
    });

    return {
      errors,
      accessToken: errors.length === 0 ? await createAccessToken(user!) : "",
    };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("username", { nullable: true }) username: string,
    @Arg("password") password: string,
    @Ctx() { req, res }: context
  ): Promise<UserResponse> {
    const { errors, user } = await handleLogin(password, username);

    if (errors.length !== 0) return { errors, accessToken: "" };

    res.cookie("jid", await createRefreshToken(user!), {
      httpOnly: true,
      sameSite: "lax",
      path: "/jid_refresh",
    });

    return {
      errors,
      accessToken: errors.length === 0 ? await createAccessToken(user!) : "",
    };
  }

  @Mutation(() => String)
  async hello(@Arg("name") name: String) {
    return `Hello ${name || "World"}`;
  }
}
