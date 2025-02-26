import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("06-promises", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);

    expect(pokemonName).toBe("bulbasaur");
  });

  test("should return a error if pokemon does not exist", async () => {
    const pokemonId = 1_000_000_000;

    try {
      await getPokemonById(pokemonId);

      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
