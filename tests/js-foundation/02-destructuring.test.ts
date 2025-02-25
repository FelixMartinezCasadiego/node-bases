import { characters } from "../../src/js-foundation/02-destructuring";

describe("02-destructuring", () => {
  test("Characters should containt Flash, Superman", () => {
    const flash = characters.find((character) => character === "Flash");
    expect(flash).toBe("Flash");

    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("First character should bw Flash, and second Superman", () => {
    const [flash, superman] = characters;

    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
