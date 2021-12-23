import { Dispatch, SetStateAction } from "react";
import { PokemonType } from "../types";

interface Props {
  setKeywordArray: Dispatch<SetStateAction<PokemonType[]>>;
  fetchedPokemons: PokemonType[];
}

const Search: React.FC<Props> = ({ setKeywordArray, fetchedPokemons }) => {
  const newArray: any = [];
  const handleSearch = (e) => {
    const timeOutId: any =
      //if length of user input value < 3, no computation required:
      e.target.value.length > 3
        ? setTimeout(() => {
            fetchedPokemons.map((pokemon, i) => {
              pokemon.name.includes(e.target.value) &&
                !pokemon.name.includes("-") &&
                newArray.push(pokemon);
            });
            setKeywordArray(newArray);
          }, 800)
        : //no user input or deleted user input resets the keywordArray.
          setKeywordArray([]);

    return () => clearTimeout(timeOutId);
  };

  return (
    <div>
      <input
        placeholder="Search"
        type="text"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default Search;
