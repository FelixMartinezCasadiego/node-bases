import { httpClientPlugin } from "../plugins/http-client.plugin";

export const getPokemonById = async (id: number | string): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClientPlugin.get(url);
    return pokemon.name;
  } catch (error) {
    throw `Pokemon not found with id ${id}`;
  }

  // const resp = await fetch( url );
  // const pokemon = await resp.json();

  // throw new Error('Pokemon no existe');

  // return fetch( url )
  //   .then( ( resp ) => resp.json())
  //   // .then( () => { throw new Error('Pokemon no existe') })
  //   .then( ( pokemon ) => pokemon.name );
};
