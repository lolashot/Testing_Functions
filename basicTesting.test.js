const {
    stringLength,
    reverseString,
    basicCalculator,
    capitaliseString,
  } = require("./basicTesting");
  
  test("should check if length of string is less than 1", () => {
    expect(() => {
      stringLength("");
    }).toThrow(Error);
  });
  
  test("should check if length of string is greater than 10", () => {
    expect(() => {
      stringLength("davidshotola");
    }).toThrow(Error);
  });
  
  it("should result in length of string", () => {
    expect(stringLength("david")).toBe(5);
  });
  
  // Work 2: Testing for reverseString
  test("should be reverse of string entered", () => {
    expect(reverseString("Adams")).toBe("smadA");
  });
  
  // Work 3: Testing for Calculator
  describe("should perform add, divide, subtract", () => {
    test("should add two numbers", () => {
      expect(basicCalculator.add(10, 30)).toBe(40);
    });
    test("should subtract two numbers", () => {
      expect(basicCalculator.subtract(5, 3)).toBe(2);
    });
    test("should multiply two numbers", () => {
      expect(basicCalculator.multiply(6, 3)).toBe(18);
    });
  });
  
  // Work 4: Capitalise string testing
  test("should return first str capitalised", () => {
    expect(capitaliseString("ego")).toBe("Ego");
  });
  