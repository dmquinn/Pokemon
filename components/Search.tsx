const Search = ({ setKeywordArray, fetchedPokemons }) => {
  const newArray: any = [];
  const handleSearch = (e) => {
    //if length of user input value < 3, no computation required:
    e.target.value.length > 3
      ? setTimeout(() => {
          fetchedPokemons.map((pokemon, i) => {
            pokemon.name.includes(e.target.value) &&
              //exclude other versions e.g. pikachu-doctor, pikachu-rockstar
              !pokemon.name.includes("-") &&
              newArray.push(pokemon);
          });
          setKeywordArray(newArray);
        }, 500)
      : //no user input or deleted user input resets the keywordArray.
        setKeywordArray([]);
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
