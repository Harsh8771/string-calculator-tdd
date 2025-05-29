const { add } = require("./stringCalculator");

describe("String Calculator", () => {
  test("empty string returns 0", () => {
    expect(add("")).toBe(0);
  });

  test("non-string input throws error", () => {
    expect(() => add(123)).toThrow("Input must be a string");
    expect(() => add(null)).toThrow("Input must be a string");
    expect(() => add({})).toThrow("Input must be a string");
  });

  test("invalid numbers in input throw error", () => {
    expect(() => add("1,abc,3")).toThrow("Invalid number in input");
  });

  test("single number returns the value", () => {
    expect(add("1")).toBe(1);
  });

  test("two numbers comma delimited returns sum", () => {
    expect(add("1,5")).toBe(6);
  });

  test("any amount of numbers returns sum", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("support custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("negative numbers throw exception", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "negative numbers not allowed -2,-4"
    );
  });
});
