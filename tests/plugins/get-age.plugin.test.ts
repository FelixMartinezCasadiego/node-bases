import { getAge } from "../../src/plugins/get-age.plugin";

describe("get-age.plugin", () => {
  test("getAge() should return the age of a person", () => {
    const birthdate = "1990-03-10";
    const age = getAge(birthdate);

    expect(typeof age).toBe("number");
  });

  test("getAge should return curretn age", () => {
    const birthdate = "1990-03-10";
    const age = getAge(birthdate);

    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);
  });

  test("getAge return 0 years", () => {
    // Create a spy to create a mock
    jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);

    const birthdate = "1990-10-21";
    const age = getAge(birthdate);

    expect(age).toBe(0);
  });
});
