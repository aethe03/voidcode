import argon from "argon2";
import { FieldError } from "../entity/ReturnFields";
import { User } from "../entity/User";
import { createError } from "./error";

export const handleLogin = async (
  password: string,
  username?: string
): Promise<{ errors: Array<FieldError>; user?: User | null }> => {
  let errors: Array<FieldError> = [];
  if (!username) {
    errors.push(
      createError(
        "Username",
        "Username wasn't given, please enter username to continue"
      )
    );
  }
  if (!password) {
    errors.push(
      createError(
        "Password",
        "Password wasn't given, please enter password to continue"
      )
    );
  }
  if (errors.length > 0) return { errors };

  const user = await User.findOne({ where: { username } });

  if (!user) {
    errors.push(
      createError("User", "User doesn't exist, did you mean to register?")
    );
  }

  if (errors.length > 0) return { errors };
  if (!(await argon.verify(user!.password!, password))) {
    errors.push(createError("Password", "Password incorrect"));
  }
  if (errors.length > 0) return { errors };
  return { errors, user };
};
