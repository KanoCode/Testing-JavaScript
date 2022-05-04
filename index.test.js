const { exportAllDeclaration } = require("@babel/types");
const { default: TestRunner } = require("jest-runner");
const importJs = require("./index");
// const reverseString = require('./index');

test("returns str", () => {
  let testStr = "check";
  let strLength = testStr.length;
  let testResult = importJs.stringLength(testStr);
  expect(testResult).toBe(strLength);
});

test("empty strings return undefined", () => {
  let testStr = "";
  let testResult = importJs.stringLength(testStr);
  expect(testResult).toBeUndefined();
});
test("maximum string length exeeded", () => {
  let testStr = "hackaigygthon";
  let testResult = importJs.stringLength(testStr);
  expect(testResult).toBeUndefined();
});

// Tests for reversed string

test("input is a valid string", () => {
  let str = "me";
  let checkStr = typeof importJs.reverseString(str);

  expect(checkStr).toBe("string");
});

describe("adding my calculator values ", () => {
  // input is a number
  test("input is not a number", () => {
    let [a, b] = [6, 5];
    let result = typeof importJs.calc.add(a, b);

    expect(result).toBe("number");
  });
  test("not adding two zeros", () => {
    let [a, b] = [0, 10];
    let result = importJs.calc.add(a, b);
    expect(result).toBeTruthy();
  });
  test("adding only positive valued inputs", () => {
    let [a, b] = [3, 2];
    let result = importJs.calc.add(a, b);
    expect(result).not.toBeUndefined();
  });
});

describe("subtracting my calculator values ", () => {
  // input is a number
  test("input is not a number", () => {
    let [a, b] = [0 , 5];
    let result = importJs.calc.subtract(a, b);

    expect(result).toBe(-5);
  });
  test("inputs should not be two zeros", () => {
    let [a, b] = [0, 10];
    let result = importJs.calc.add(a, b);
    expect(result).toBeTruthy();
  });
  test("adding only positive valued inputs", () => {
    let [a, b] = [3, 2];
    let result = importJs.calc.add(a, b);
    expect(result).not.toBeUndefined();
  });
});

describe("dividing my calculator values ", () => {
  // input is a number
  test("input is not a number", () => {
    let [a, b] = ["", 5];
    let result = typeof importJs.calc.divide(a, b);

    expect(result).toBe("number");
  });
  test("inputs should not be two zeros", () => {
    let [a, b] = [0, 0];
    let result = importJs.calc.divide(a, b);
    expect(result).toBeDefined();
  });
  test("second input must not be zero", () => {
    let [a, b] = [3, 10];
    let result = importJs.calc.divide(a, b);
    expect(result).toBeDefined();
  });
});

describe("multiplying my calculator values ", () => {
  // input is a number
  test("input is not a number", () => {
    let [a, b] = [2, 5];
    let result = importJs.calc.multiply(a, b);
    expect(result).toBeTruthy();
  });
  test("inputs should not be two zeros", () => {
    let [a, b] = [0, 0];
    let result = importJs.calc.multiply(a, b);
    expect(result).toBeDefined();
  });
});

test("input is a string", ()=>{
const testStr = 'mine';
let result = importJs.capitalize(testStr);
expect(result[0]).toBe("M");
})
