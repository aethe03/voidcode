import { sign } from "jsonwebtoken";
import { User } from "../entity/User";

export const createAccessToken = async (user: User): Promise<string> => {
  return sign({ userId: user!.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "10min",
  });
};

export const createRefreshToken = async (user: User): Promise<string> => {
  return sign({ userId: user!.id, tokenVer: user!.tokenVer }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "7d",
  });
};
