import "reflect-metadata";
import { DataSource } from "typeorm";
import { Photo } from "../Model/photo";
import dotenv from "dotenv";
import { Student } from "../Model/student";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username:  process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD,
  database: "postgres",
  entities: [Photo, Student],
  synchronize: true,
  logging: false,
});

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
export const connectDatabase = () => {
  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
      console.log("Database connect succesfully");
    })
    .catch((error) => console.log(error));
};
