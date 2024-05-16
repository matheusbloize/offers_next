import Image from "next/image";

import star from "@/assets/svg/star.svg";

interface HighlightProps {
  text: string;
}

const Highlight = ({ text }: HighlightProps) => {
  return (
    <article className="flex">
      <p className="text-base lg:text-lg">
        <span className="inline-flex">
          <Image
            className="w-3 h-3 lg:w-4 lg:h-4"
            src={star}
            alt="Estrela."
            width={16}
            height={16}
          />
        </span>
        {` ${text}`}
      </p>
    </article>
  );
};

export default Highlight;
