import Express from "express";

export type context = {
  req: Express.Request;
  res: Express.Response;
  payload?: {userId: string}
};
