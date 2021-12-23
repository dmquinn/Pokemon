import React, { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

const PokemonList = (props: any) => {
  const { url, name } = props;
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [currentPokemons, setCurrentPokemons] = useState<[]>([]);
  const [fetchedPokemons, setFetchedPokemons] = useState<[]>(props.items);

  const pokemonsPerPage = 16;
  let newArr = [];
  let newCurrent: any = [];
  useEffect(() => {
    newArr = [...fetchedPokemons];
    newCurrent = newArr.slice(
      pokemonsPerPage * (pageIndex - 1),
      pokemonsPerPage * pageIndex
    );
    // console.log(
    //   "numbers",
    //   newArr.slice(
    //     pokemonsPerPage * (pageIndex - 1),
    //     pokemonsPerPage * pageIndex
    //   )
    // );
    setCurrentPokemons(newCurrent);
    {
    }
  }, [pageIndex, fetchedPokemons]);
  return (
    <div>
      {pageIndex !== 1 && (
        <button onClick={() => setPageIndex(pageIndex + 1)}>Back</button>
      )}
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>{" "}
      {currentPokemons.map((pokemon: any, i: any) => {
        return <PokemonCard key={i} items={pokemon} />;
      })}
    </div>
  );
};

export default PokemonList;
