import { calcPoints } from "./utils";

describe("Calculate points of transactions", () => {
  test("Testing calculations", () => {
    expect(calcPoints(20)).toBe(0);
    expect(calcPoints(50)).toBe(0);
    expect(calcPoints(70)).toBe(20);
    expect(calcPoints(120)).toBe(90);
    expect(calcPoints(150)).toBe(150);
    expect(calcPoints(200)).toBe(250);
  });
});
