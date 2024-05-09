import mysql, { Connection } from "mysql2/promise";

let alreadyConnected = false;
let connect: Connection | string = "";

export const connectionToDB = async () => {
  try {
    if (alreadyConnected) {
      return connect;
    }
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    alreadyConnected = true;
    connect = connection;
    return connection;
  } catch (error) {
    console.log("Failed to connect to database");
  }
};
