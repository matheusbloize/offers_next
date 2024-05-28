export interface Offer {
  offer_id: number;
  title: string;
  description: string;
  price: string;
  discounted_price: string;
  category: string;
  image?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}
