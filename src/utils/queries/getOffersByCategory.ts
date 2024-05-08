import axios from "axios";

import { Offer } from "@/models/OfferModel";

const URL = "http://localhost:3000/api/offers/read/category";

interface Error {
  response: {
    data: string;
  };
}

async function fetchOffersByCategory(category: string) {
  try {
    const offers = await axios.post<Offer[]>(URL, { category });
    return offers.data;
  } catch (error) {
    const knownError = error as Error;
    console.log(knownError.response.data);
  }
}

export default fetchOffersByCategory;
