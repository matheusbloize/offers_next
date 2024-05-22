import Image from "next/image";
import Link from "next/link";

import default_image from "@/assets/images/default.png";

interface OfferProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

const Offer = ({ id, title, description, price, image }: OfferProps) => {
  return (
    <Link href={`/oferta/${id}`}>
      <article className="flex flex-col w-full h-full">
        <Image
          className={`w-full h-72 ${image ? `sm:w-${image.width} sm:h-${image.height}` : "sm:h-48"} object-cover`}
          src={image ? image.url : default_image}
          alt={image ? image.alt : "Imagem padrão."}
          width={image ? image.width : 288}
          height={image ? image.height : 192}
        />
        <section>
          <h3 className="font-bold ellipsis">{title}</h3>
          <p className="text-sm min-h-10 ellipsis">{description}</p>
          <span className="font-bold">
            R$ {price.toFixed(2).replace(".", ",")}
          </span>
        </section>
        <button className="bg-black text-white p-2 w-full transition-all hover:opacity-75">
          Comprar
        </button>
      </article>
    </Link>
  );
};

export default Offer;
