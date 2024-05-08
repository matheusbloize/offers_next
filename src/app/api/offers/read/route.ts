import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export const GET = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    const [results] = await connection.query("SELECT * FROM project.offers");

    return new NextResponse(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new NextResponse("vish", { status: 500 });
  }
};
