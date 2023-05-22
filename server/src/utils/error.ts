import { FieldError } from "../entity/ReturnFields";

export const createError = (field: string, message: string) => {
  const error = new FieldError();
  error.field = field;
  error.message = message;
  return error;
};
