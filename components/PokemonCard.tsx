import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  url: string;
}

const PokemonCard: React.FC<Props> = (props) => {
  const { name, url } = props;
  const [imageError, setImageError] = useState<boolean>(false);
  const imageIndex = url.split("mon/").pop().replace("/", "");
  const singlePokemon = `/${name}`;

  useEffect(() => {
    setImageError(false);
  }, [name]);

  if (!name || !url) {
    return null;
  }

  return (
    <Link href={singlePokemon} passHref>
      <div className="hover:bg-blue-300 transition rounded-lg shadow-lg text-center cursor-pointer ">
        <Image
          //these images look better and load quicker than previous png img
          src={
            imageError
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
              : `https://raw.githubusercontent.com/sashafirsov/pokeapi-sprites/master/sprites/pokemon/other/dream-world/${imageIndex}.svg`
          }
          alt={name}
          width={100}
          height={100}
          quality={1}
          onError={() => setImageError(true)}
          className="fade"
        />
        <div className="font-bold text-xl mb-2 px-6 pb-2">{name}</div>
      </div>
    </Link>
  );
};

export default PokemonCard;
