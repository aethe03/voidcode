export const __prod__ = process.env.NODE_ENV === "production";
export const __port__ = __prod__ ? process.env.PORT : 6000;
