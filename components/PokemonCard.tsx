import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  url: string;
}

const PokemonCard: React.FC<Props> = (props) => {
  const { name, url } = props;

  const imageIndex = url.split("mon/").pop().replace("/", "");
  //seems not to work if props.name is used = type error?
  const singlePokemon = `/${name}`;

  if (!name || !url) {
    return null;
  }
  return (
    <Link href={singlePokemon} passHref>
      <div className="shadow-lg text-center cursor-pointer ">
        <Image
          src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${imageIndex}.png?raw=true`}
          alt={name}
          width={100}
          height={100}
          quality={1}
        />
        <div className="font-bold text-xl mb-2 px-6 pb-2">{name}</div>
      </div>
    </Link>
  );
};

export default PokemonCard;
