import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PokemonCard = (props: any) => {
  const { items } = props;
  console.log(items);
  const imageIndex = items.url.split("mon/").pop().replace("/", "");
  return (
    <div>
      {/* <Link href={items.name} passHref> */}
      {items.name}
      <Image
        src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${imageIndex}.png?raw=true`}
        alt=""
        width="150"
        height="150"
      />
      {/* </Link> */}
    </div>
  );
};
