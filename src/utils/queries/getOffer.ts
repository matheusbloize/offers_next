import axios from "axios";

import { Offer } from "@/models/OfferModel";

import { URL } from "../URL";

interface Error {
  response: {
    data: string;
  };
}

async function fetchOffer(id: string) {
  try {
    const offer = await axios.post<Offer[]>(`${URL}/id`, { id });
    return offer.data[0];
  } catch (error) {
    const knownError = error as Error;
    console.log(knownError.response.data);
  }
}

export default fetchOffer;
