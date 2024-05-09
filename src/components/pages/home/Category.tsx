"use client";

import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Image from "next/image";
import Carousel from "react-multi-carousel";

import loader from "@/assets/svg/loader.svg";
import "react-multi-carousel/lib/styles.css";

const DynamicOffer = dynamic(() => import("./Offer"), {
  loading: () => (
    <article className="flex flex-col w-full h-full animate-pulse text-transparent">
      <Image
        className={`w-full h-72 object-cover bg-gray-300 sm:h-48`}
        src={loader}
        alt={"Carregamento."}
        width={288}
        height={192}
      />
      <section>
        <h3 className="bg-gray-200">Carregando...</h3>
        <p className="min-h-10 bg-gray-100">Carregando...</p>
        <span className="bg-gray-200">R$ Carregando...</span>
      </section>
      <button className="p-2 w-full transition-all bg-gray-100 hover:opacity-75">
        Comprar
      </button>
    </article>
  ),
});

const responsive = {
  "2xl": {
    breakpoint: { max: 3000, min: 2000 },
    items: 6,
    partialVisibilityGutter: -10,
  },
  xl: {
    breakpoint: { max: 1999, min: 1280 },
    items: 4,
    partialVisibilityGutter: -10,
  },
  lg: {
    breakpoint: { max: 1279, min: 1024 },
    items: 3,
    partialVisibilityGutter: -10,
  },
  sm: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    partialVisibilityGutter: -10,
  },
  base: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    partialVisibilityGutter: -10,
  },
};

interface CategoryProps {
  title: string;
}

export const Category = ({ title }: CategoryProps) => {
  const { data, isLoading } = useQuery({
    queryKey: [`fetch-offers-by-category-${title}`],
    queryFn: async () => {
      const query = (
        await import("@/utils/queries/getOffersByCategory")
      ).default(title);
      return query;
    },
    refetchOnWindowFocus: false,
  });

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold capitalize">{title}</h2>
      {data && (
        <Carousel
          swipeable={true}
          responsive={responsive}
          infinite={true}
          itemClass="carouselItem"
          partialVisible
        >
          {data &&
            data.map((offer) => (
              <DynamicOffer
                key={offer.offer_id}
                title={offer.title}
                description={offer.description}
                price={
                  offer.discounted_price !== "0"
                    ? Number(offer.discounted_price)
                    : Number(offer.price)
                }
              />
            ))}
        </Carousel>
      )}
      {isLoading && (
        <div className="w-full flex bg-gray-300 animate-pulse h-[416px] sm:h-80"></div>
      )}
    </section>
  );
};

export default Category;
