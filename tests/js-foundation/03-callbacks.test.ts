import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("03-callbacks", () => {
  test("getUserById should return an error if user not exist", (done) => {
    const id = 10;

    getUserById(id, (error: string, user: string) => {
      expect(error).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      // No termina la prueba hasta que termine el done
      done();
    });
  });

  test("getUserById should return John Doe", (done) => {
    const id = 1;

    getUserById(id, (err: string | null, user: Object) => {
      expect(err).toBe(null);

      expect(user).toStrictEqual({ id: 1, name: "John Doe" });

      done();
    });
  });
});
