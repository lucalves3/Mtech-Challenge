/* eslint-disable no-undef */
export async function getAllPokemons() {
  const apiPoke = await fetch('https://pokeapi.co/api/v2/pokemon?limit=900')
  const returnApiPoke = await apiPoke.json();
  return returnApiPoke;
}

export async function getApiPokemon(namePokemon) {
  const apiPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
  const apiToJson = await apiPoke.json();
  return apiToJson
}

export async function searchApiPokemon(nameSearch) {
  const apiPokeSearch = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameSearch}`);
  const apiToJsonSearch = await apiPokeSearch.json();
  return apiToJsonSearch;
}

export async function searchApiPokemonById(id) {
  const apiToPokeId = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const apiToJson = await apiToPokeId.json();
  return apiToJson;
}