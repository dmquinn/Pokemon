import React from "react";
import { PokemonCard } from "./PokemonCard";

const PokemonList = (props: any) => {
  const { url, name } = props;

  props.items.map((pokemon: any, i: any) => {
    console.log(pokemon.name);
  });

  console.log("props", props.items);
  return (
    <div>
      <h1>PROPS</h1>
      {props.items.map((pokemon: any, i: any) => {
        return <PokemonCard key={i} items={pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
