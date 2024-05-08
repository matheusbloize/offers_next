import { NextResponse } from "next/server";

import { connectionToDB } from "@/utils/database";

export const POST = async (req: Request) => {
  const { category } = await req.json();

  if (!category) {
    return new NextResponse("Category field is undefined", { status: 422 });
  }

  try {
    const connection = await connectionToDB();
    if (!connection) {
      return new NextResponse("Failed to connect to database", { status: 500 });
    }

    const [results] = await connection.query(
      `SELECT * FROM project.offers WHERE category = '${category}'`,
    );

    return new NextResponse(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch category offers", { status: 500 });
  }
};
