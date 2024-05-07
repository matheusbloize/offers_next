import Image from "next/image";
import Link from "next/link";

import cart from "@/assets/svg/cart.svg";
import next from "@/assets/svg/next.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-solid border-2 border-black rounded-lg p-4 m-4">
      <Link href={"/"} className="flex gap-2 items-center">
        <Image src={next} alt="Símbolo de código." width={48} height={48} />
        <h1 className="text-lg font-bold">Ofertas Next.js</h1>
      </Link>
      <Link href={"/carrinho"}>
        <Image src={cart} alt="Carrinho." width={32} height={32} />
      </Link>
    </header>
  );
};

export default Header;
