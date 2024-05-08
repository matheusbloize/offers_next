import { NextResponse } from "next/server";

import { connectionToDB } from "@/utils/database";

export const GET = async () => {
  try {
    const connection = await connectionToDB();
    if (!connection) {
      return new NextResponse("Failed to connect to database", { status: 500 });
    }

    const [results] = await connection.query("SELECT * FROM project.offers");

    return new NextResponse(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to fetch all offers", { status: 500 });
  }
};
