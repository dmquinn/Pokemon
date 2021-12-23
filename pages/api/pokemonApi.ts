export const getAllPokemons = async () => {
  //if incremental search is used we must fetch all pokemon first
  //option to make call to specific pokemon every 16 to have more data displayed
  const url = `https://pokeapi.co/api/v2/pokemon?limit=1118`; 
  const res = await fetch(url); 
  try{
  const data = await res.json(); 
  return data.results;
  }
   catch (error){
    console.log(error)
  }
}

export const getPokemon = async(name:string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  const res = await fetch(url); 
  try{
  const data = await res.json(); 
    return data;
  }
   catch (error){
    console.log(error)
  }
}

