import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const db = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: "postgres",
  password: process.env.DATABASE_PASSWORD,
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
