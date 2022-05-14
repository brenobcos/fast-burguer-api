import { DataSource } from "typeorm";
require("dotenv").config();
// import { User } from "./entities/user.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: ["src/models/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source inicializado");
  })
  .catch((err) => {
    console.error("Error durante Data Source initialization", err);
  });