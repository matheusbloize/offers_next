"use client";

import { useParams } from "next/navigation";

import Highlight from "@/components/pages/offer/Highlight";

const OfferPage = () => {
  const params = useParams();

  return (
    <main className="flex flex-col p-4 gap-12 max-w-7xl mx-auto">
      <section className="flex justify-between flex-col lg:flex-row">
        <section className="flex flex-col gap-4 w-full max-w-2xl mx-auto lg:max-w-3xl lg:m-0">
          <div className="w-full h-[420px] object-cover bg-blue-400">
            {params.id}
          </div>
          <section className="hidden w-full justify-between lg:flex">
            <div className="w-40 h-24 bg-green-400"></div>
            <div className="w-40 h-24 bg-green-400"></div>
            <div className="w-40 h-24 bg-green-400"></div>
            <div className="w-40 h-24 bg-green-400"></div>
          </section>
        </section>
        <section className="flex flex-col items-center w-full gap-4 mt-8 lg:w-1/4">
          <h2 className="font-bold text-xl lg:text-2xl">Hotel Long Beach</h2>
          <p className="text-base px-4">
            2 diárias no quarto vista jardim para 2 adultos + café da manhã em
            Canoa Quebrada
          </p>
          <section className="flex flex-col gap-2">
            <span className="text-sm lg:text-base">por apenas</span>
            <p className="font-bold text-xl lg:text-2xl">R$ 350,00</p>
          </section>
          <section className="flex flex-col gap-4">
            <button className="bg-black text-white p-2 w-40 transition-all hover:opacity-75">
              Comprar
            </button>
            <button className="bg-black text-white p-2 w-40 transition-all hover:opacity-75">
              Adicionar ao carrinho
            </button>
          </section>
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
