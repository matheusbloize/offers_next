import mysql from "mysql2/promise";

export const connectionToDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    return connection;
  } catch (error) {
    console.log("Failed to connect to database");
  }
};
