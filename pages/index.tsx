import Head from "next/head";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import PokemonList from "../components/PokemonList";
import Search from "../components/Search";

import { getAllPokemons } from "./api/pokemonApi";
interface Props {
  pokemons: [{ name: any }];
}
const Home: React.FC<Props> = (props) => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  //pokemon displayed on page at once:
  const [currentPokemons, setCurrentPokemons] = useState<[]>([]);
  const [fetchedPokemons, setFetchedPokemons] = useState<any>(props.pokemons);
  const [keywordArray, setKeywordArray] = useState<[]>([]);

  const pokemonsPerPage = 16;
  let newArr = [];
  let newCurrent: any = [];
  useEffect(() => {
    {
      newArr = [...fetchedPokemons];
      newCurrent = newArr.slice(
        pokemonsPerPage * (pageIndex - 1),
        pokemonsPerPage * pageIndex
      );
      keywordArray.length > 0
        ? setCurrentPokemons(keywordArray)
        : setCurrentPokemons(newCurrent);
    }
  }, [pageIndex, keywordArray]);

  return (
    <div>
      <Head>
        <title>Pokemon App</title>
        <meta
          name="description"
          content="Pokedex for Prepend Technical Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Pokemon</h1>
        <Search
          setKeywordArray={setKeywordArray}
          fetchedPokemons={fetchedPokemons}
        />{" "}
        {fetchedPokemons && (
          <PokemonList setPageIndex={setPageIndex} pageIndex={pageIndex}>
            {currentPokemons.length &&
              currentPokemons.map((pokemon, i) => {
                return (
                  <PokemonCard url={pokemon.url} name={pokemon.name} key={i} />
                );
              })}
          </PokemonList>
        )}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPokemons = await getAllPokemons();
  return {
    props: {
      pokemons: allPokemons,
    },
  };
};
