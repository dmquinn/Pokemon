import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { getPokemon } from "./api/pokemonApi";

const PokemonDetailsPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const [pokemon, setPokemon] = useState<null>(null);
  let moves: [] = [];
  let types: [] = [];
  const getPoke = async () => {
    //ts error due to router assuming string can be array?
    const poke = await getPokemon(name);
    setPokemon(poke);
    console.log(poke);
  };
  useEffect(() => {
    if (name) {
      getPoke();
    }
  }, [name]);

  //Add loading here
  if (!pokemon) return null;
  if (pokemon) {
    pokemon.moves.map((move, i) => {
      moves.push(move.move.name);
    });
    pokemon.types.map((type, i) => {
      types.push(type.type.name);
    });
  }

  return (
    <>
      {!!pokemon && (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 p-20">
          <div className="p-5">
            <Image
              width="200"
              height="200"
              objectFit="contain"
              alt={name}
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            />
            <h1 className="pt-6">{pokemon.species.name}</h1>
            <ul>
              <li>Height: {pokemon.height}</li>
              <li>Weight: {pokemon.weight}</li>
            </ul>

            <h1>Stats</h1>
            <ul>
              <li>HP:{pokemon.stats[0].base_stat}</li>
              <li>Attack:{pokemon.stats[1].base_stat}</li>
              <li>Defense:{pokemon.stats[2].base_stat}</li>
              <li>Special-Attack:{pokemon.stats[3].base_stat}</li>
              <li>Special-Defense:{pokemon.stats[4].base_stat}</li>
              <li>Speed:{pokemon.stats[5].base_stat}</li>
            </ul>
          </div>

          <div>
            <h1>Moves</h1>
            <ul className="movesCard">
              {moves.map((move, i) => {
                return (
                  <span key={i}>
                    {move} {i == moves.length - 1 ? "." : ", "}
                  </span>
                );
              })}
            </ul>
          </div>

          <div>
            <h1>Types</h1>
            <ul>
              {types.map((type, i) => {
                return <li key={i}>{type}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetailsPage;
