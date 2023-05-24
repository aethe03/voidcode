import { FieldError } from "../entity/ReturnFields";
import { User } from "../entity/User";
import { createError } from "./error";

export const handleRegister = async (email: string, username: string) => {
  let errors: Array<FieldError> = [];
  if (await User.findOne({ where: { email }, select: ["id"] })) {
    errors.push(
      createError(
        "Invalid Email",
        "User with email already exists, did you mean to login?"
      )
    );
  }
  if (await User.findOne({ where: { username }, select: ["id"] })) {
    errors.push(
      createError(
        "Invalid Username",
        "User with username already exists, please try another username"
      )
    );
  }
  return {
    errors,
  };
};
