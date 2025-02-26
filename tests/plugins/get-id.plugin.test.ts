import { getUUID } from "../../src/plugins/get-id.plugin";

describe("get-id.plugin", () => {
  test("should return a string", () => {
    const uuid = getUUID();

    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
  });
});
