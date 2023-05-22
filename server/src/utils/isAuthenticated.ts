import { MiddlewareFn } from "type-graphql";
import { context } from "./context";
import { verify } from "jsonwebtoken";

export const isAuth:MiddlewareFn<context> = ({context}, next) => {
  const authorization = context.req.headers["authorization"]
  
  try{
    const token = authorization?.split(" ")[1] || ""
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!)
    context.payload = payload as any
  }catch(err){
    console.log(err)
  }

  return next()
}