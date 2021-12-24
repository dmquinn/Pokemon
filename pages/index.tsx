import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Head from "next/head";
import { getAllPokemons } from "./api/pokemonApi";
import PokemonList from "../components/PokemonList";
import PokemonCard from "../components/PokemonCard";
import Search from "../components/Search";
import { PokemonType } from "../types";

interface Props {
  data: string;
  pokemons: PokemonType[];
  pageIndex: number;
  keywordArray: PokemonType[];
  setFetchedPokemons: Dispatch<SetStateAction<PokemonType[]>>;
  setCurrentPokemons: Dispatch<SetStateAction<PokemonType[]>>;
  setKeywordArray: Dispatch<SetStateAction<PokemonType[]>>;
}

const Home: React.FC<Props> = (props) => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [fetchedPokemons, setFetchedPokemons] = useState<PokemonType[]>(
    props.pokemons
  );
  //pokemon displayed on page at once:
  const [currentPokemons, setCurrentPokemons] = useState<PokemonType[]>([]);
  //filtered pokemons from user input:
  const [keywordArray, setKeywordArray] = useState<PokemonType[]>([]);

  const pokemonsPerPage = 16;
  let newArr = [];
  let newCurrent = [];

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
    <div className=" p-10">
      <Head>
        <title>Pokemon App</title>
        <meta
          name="description"
          content="Pokedex for Prepend Technical Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>POKEMON</h1>
      <Search
        setKeywordArray={setKeywordArray}
        fetchedPokemons={fetchedPokemons}
      />

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
  );
};

export const getStaticProps = async () => {
  //get all pokemon
  const allPokemons = await getAllPokemons();
  return {
    props: {
      pokemons: allPokemons,
    },
  };
};

export default Home;
