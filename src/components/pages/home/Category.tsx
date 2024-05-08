"use client";

import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Image from "next/image";

import loader from "@/assets/svg/loader.svg";

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
      <section className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
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
        {isLoading && (
          <>
            <div className="w-full h-screen bg-gray-100 animate-pulse sm:h-80"></div>
            <div className="w-full h-screen bg-gray-100 animate-pulse sm:h-80"></div>
            <div className="w-full h-screen bg-gray-100 animate-pulse sm:h-80"></div>
            <div className="w-full h-screen bg-gray-100 animate-pulse sm:h-80"></div>
            <div className="w-full h-screen bg-gray-100 animate-pulse sm:h-80 max-2xl:hidden"></div>
            <div className="w-full h-screen bg-gray-100 animate-pulse sm:h-80 max-2xl:hidden"></div>
          </>
        )}
      </section>
    </section>
  );
};

export default Category;
