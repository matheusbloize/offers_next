import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

import { Image } from "@/models/ImageModel";
import { Offer } from "@/models/OfferModel";
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

    const [images] = await connection.query(
      `SELECT * FROM project.images WHERE offer_id = '${id}'`,
    );

    (results as Array<Offer>).map((result) => {
      (images as Array<Image>).map((img) => {
        if (img.offer_id === result.offer_id) {
          result.image = {
            url: img.image_link,
            alt: "Image Alt Text.",
            width: 288,
            height: 192,
          };
        }
      });
    });

    return new NextResponse(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch offer", { status: 500 });
  }
};
