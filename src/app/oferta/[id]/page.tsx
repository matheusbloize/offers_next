"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

import Highlight from "@/components/pages/offer/Highlight";

const OfferPage = () => {
  const params = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [`fetch-offer-by-id-${params.id}`],
    queryFn: async () => {
      const query = (await import("@/utils/queries/getOffer")).default(
        params.id as string,
      );
      return query;
    },
    refetchOnWindowFocus: false,
  });
  const [mainImage, setMainImage] = useState<string>("1");

  return (
    <main className="flex flex-col p-4 gap-12 max-w-7xl mx-auto">
      <section className="flex justify-between flex-col lg:flex-row">
        <section className="flex flex-col gap-4 w-full max-w-2xl mx-auto lg:max-w-3xl lg:m-0">
          <div className="w-full h-[420px] object-cover bg-blue-400">
            {mainImage}
          </div>
          <section className="hidden w-full justify-between lg:flex">
            {[1, 2, 3, 4].map((image) => (
              <div
                key={image}
                onClick={() => setMainImage(image.toString())}
                className="w-40 h-24 bg-green-400"
              >
                {image}
              </div>
            ))}
          </section>
        </section>
        <section className="flex flex-col items-center w-full gap-4 mt-8 lg:w-1/4">
          {data && (
            <>
              <h2 className="font-bold text-xl lg:text-2xl">{data.title}</h2>
              <p className="text-base px-4">{data.description}</p>
              <section className="flex flex-col gap-2">
                <span className="text-sm lg:text-base">por apenas</span>
                <p className="font-bold text-xl lg:text-2xl">
                  R${" "}
                  {Number(
                    Number(data.discounted_price) !== 0
                      ? data.discounted_price
                      : data.price,
                  )
                    .toFixed(2)
                    .replace(".", ",")}
                </p>
              </section>
              <section className="flex flex-col gap-4">
                <button className="bg-black text-white p-2 w-40 transition-all hover:opacity-75">
                  Comprar
                </button>
                <button className="bg-black text-white p-2 w-40 transition-all hover:opacity-75">
                  Adicionar ao carrinho
                </button>
              </section>
            </>
          )}
          {isLoading && (
            <>
              <h2 className="font-bold text-xl lg:text-2xl text-transparent bg-gray-200 animate-pulse">
                Carregando...
              </h2>
              <p className="text-base px-4 text-transparent bg-gray-300 animate-pulse">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <section className="flex flex-col gap-2 text-transparent bg-gray-200 animate-pulse">
                <span className="text-sm lg:text-base">por apenas</span>
                <p className="font-bold text-xl lg:text-2xl">
                  R$ Carregando...
                </p>
              </section>
              <section className="flex flex-col gap-4">
                <button className="bg-black text-white p-2 w-40 transition-all hover:opacity-75">
                  Comprar
                </button>
                <button className="bg-black text-white p-2 w-40 transition-all hover:opacity-75">
                  Adicionar ao carrinho
                </button>
              </section>
            </>
          )}
        </section>
      </section>
      <section className="flex flex-col gap-4 w-full mx-auto">
        <h3 className="font-bold text-xl lg:text-2xl">Destaques da Oferta</h3>
        <Highlight text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus voluptate veniam perferendis repellat vitae sapiente enim vero, blanditiis quaerat eos praesentium ipsum dolorem reiciendis laborum tempore temporibus voluptatum deserunt." />
      </section>
    </main>
  );
};

export default OfferPage;
