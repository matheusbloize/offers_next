import axios from "axios";

import { Offer } from "@/models/OfferModel";

import { URL } from "../URL";

interface Error {
  response: {
    data: string;
  };
}

async function fetchOffersByCategory(category: string) {
  try {
    const offers = await axios.post<Offer[]>(`${URL}/category`, { category });
    return offers.data;
  } catch (error) {
    const knownError = error as Error;
    console.log(knownError.response.data);
  }
}

export default fetchOffersByCategory;
