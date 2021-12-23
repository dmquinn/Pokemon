export const getAllPokemons = async () => {

  const url = `https://pokeapi.co/api/v2/pokemon?limit=96`; 
  const res = await fetch(url); 
  try{
  const data = await res.json(); 

  return data.results;
  }
   catch (error){
    console.log(error)
  }
}