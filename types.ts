export type PokemonType = {
    id?: number,
    name: string,
    url: string,
    moves?: {
        move: {
            name: string
        }
    }[],
     weight?: number,
    height?: number,
    stats?: 
         {
        base_stat: number,
        stat: {
            name: string
        }
    }[],
  
    types?: {
        type: {
            name: string,
        }
    }[],
    species?: {
        name: string,
    },  

}

