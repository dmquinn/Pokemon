export const getAllPokemons = async () => {

  const url = `https://pokeapi.co/api/v2/pokemon?limit=16`; 
  const res = await fetch(url); 
  try{
  const data = await res.json(); 
    console.log(data.results)

  return data.results;
  }
   catch (error){
    console.log(error)
  }
}