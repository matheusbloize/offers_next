import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

import { connectionToDB } from "@/utils/database";

export const POST = async (req: Request) => {
  const { id } = await req.json();

  if (!id) {
    return new NextResponse("Id field is undefined", { status: 422 });
  }

  try {
    const connection = (await connectionToDB()) as mysql.Connection;
    if (!connection) {
      return new NextResponse("Failed to connect to database", { status: 500 });
    }

    const [results] = await connection.query(
      `SELECT * FROM project.offers WHERE offer_id = '${id}'`,
    );

    return new NextResponse(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch offer", { status: 500 });
  }
};
