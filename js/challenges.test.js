const { test, describe } = require("node:test");
const assert = require("node:assert");

const {
  reverseString,
  isPalindrome,
  countVowels,
  capitalize,
  unique,
  findMax,
  sum,
  uniqueArray,
  flatten,
  sortByKey,
  isPrime,
  factorial,
  fibonacci,
  gcd,
  mergeObjects,
  deepClone,
  deepEqual,
} = require("./challenges");

// 1. Reverse a string
describe("reverseString", () => {
  test('reverses "hello" to "olleh"', () => {
    assert.strictEqual(reverseString("hello"), "olleh");
  });
});

// 2. Check if palindrome
describe("isPalindrome", () => {
  test("returns true for racecar", () => {
    assert.strictEqual(isPalindrome("racecar"), true);
  });

  test("returns false for hello", () => {
    assert.strictEqual(isPalindrome("hello"), false);
  });

  test("returns true for sentence palindrome (case insensitive)", () => {
    assert.strictEqual(isPalindrome("A man, a plan, a canal: Panama", true), true);
  });

  test("returns false for race a car (case insensitive)", () => {
    assert.strictEqual(isPalindrome("race a car", true), false);
  });
});

// 3. Count vowels
describe("countVowels", () => {
  test('counts 3 vowels in "hello world"', () => {
    assert.strictEqual(countVowels("hello world"), 3);
  });

  test('counts 3 vowels in "JavaScript"', () => {
    assert.strictEqual(countVowels("JavaScript"), 3);
  });
});

// 4. Capitalize words
describe("capitalize", () => {
  test('capitalizes "hello world" to "Hello World"', () => {
    assert.strictEqual(capitalize("hello world"), "Hello World");
  });

  test('capitalizes "HELLO WORLD" to "Hello World"', () => {
    assert.strictEqual(capitalize("HELLO WORLD"), "Hello World");
  });

  test("handles multiple spaces", () => {
    assert.strictEqual(capitalize("hello  world"), "Hello  World");
  });
});

// 5. Remove duplicates (string)
describe("unique", () => {
  test('removes duplicates from "hello"', () => {
    assert.strictEqual(unique("hello"), "helo");
  });

  test('removes duplicates from "programming"', () => {
    assert.strictEqual(unique("programming"), "progamin");
  });
});

// 6. Find largest
describe("findMax", () => {
  test("finds max in [1, 5, 3]", () => {
    assert.strictEqual(findMax([1, 5, 3]), 5);
  });

  test("finds max in [5, 2, 9, 1, 7]", () => {
    assert.strictEqual(findMax([5, 2, 9, 1, 7]), 9);
  });
});

// 7. Sum all
describe("sum", () => {
  test("returns 0 for empty array", () => {
    assert.strictEqual(sum([]), 0);
  });

  test("returns single element for single-element array", () => {
    assert.strictEqual(sum([5]), 5);
  });

  test("sums [-1, 1] to 0", () => {
    assert.strictEqual(sum([-1, 1]), 0);
  });

  test("sums floats [1.5, 2.5] to 4", () => {
    assert.strictEqual(sum([1.5, 2.5]), 4);
  });
});

// 8. Remove duplicates (array)
describe("uniqueArray", () => {
  test("removes duplicates from [1, 2, 2, 3]", () => {
    assert.deepStrictEqual(uniqueArray([1, 2, 2, 3]), [1, 2, 3]);
  });

  test("returns empty array for empty input", () => {
    assert.deepStrictEqual(uniqueArray([]), []);
  });

  test("returns same array for single element", () => {
    assert.deepStrictEqual(uniqueArray([1]), [1]);
  });

  test("removes all duplicates from [1, 1, 1, 1]", () => {
    assert.deepStrictEqual(uniqueArray([1, 1, 1, 1]), [1]);
  });

  test("treats different types as unique", () => {
    assert.deepStrictEqual(uniqueArray([1, "1", 1]), [1, "1"]);
  });

  test("handles null and undefined", () => {
    assert.deepStrictEqual(uniqueArray([null, null, undefined]), [null, undefined]);
  });
});

// 9. Flatten array
describe("flatten", () => {
  test("returns empty array for empty input", () => {
    assert.deepStrictEqual(flatten([]), []);
  });

  test("returns empty array for nested empty array", () => {
    assert.deepStrictEqual(flatten([[]]), []);
  });

  test("returns same array if already flat", () => {
    assert.deepStrictEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });

  test("flattens [[1], [2], [3]]", () => {
    assert.deepStrictEqual(flatten([[1], [2], [3]]), [1, 2, 3]);
  });

  test("flattens mixed array [1, [2], 3]", () => {
    assert.deepStrictEqual(flatten([1, [2], 3]), [1, 2, 3]);
  });

  test("flattens [[1, 2], [3, 4]]", () => {
    assert.deepStrictEqual(flatten([[1, 2], [3, 4]]), [1, 2, 3, 4]);
  });

  test("flattens [1, [2, 3], 4]", () => {
    assert.deepStrictEqual(flatten([1, [2, 3], 4]), [1, 2, 3, 4]);
  });
});

// 10. Sort by property
describe("sortByKey", () => {
  const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 },
  ];

  test("sorts by age ascending", () => {
    const result = sortByKey(users, "age");
    assert.strictEqual(result[0].name, "Jane");
    assert.strictEqual(result[1].name, "John");
    assert.strictEqual(result[2].name, "Bob");
  });

  test("sorts by age descending", () => {
    const result = sortByKey(users, "age", "desc");
    assert.strictEqual(result[0].name, "Bob");
    assert.strictEqual(result[1].name, "John");
    assert.strictEqual(result[2].name, "Jane");
  });

  test("sorts by name", () => {
    const result = sortByKey(users, "name");
    assert.strictEqual(result[0].name, "Bob");
    assert.strictEqual(result[1].name, "Jane");
    assert.strictEqual(result[2].name, "John");
  });
});

// 12. Is prime
describe("isPrime", () => {
  test("returns true for 7", () => {
    assert.strictEqual(isPrime(7), true);
  });

  test("returns false for 10", () => {
    assert.strictEqual(isPrime(10), false);
  });

  test("returns true for 2", () => {
    assert.strictEqual(isPrime(2), true);
  });

  test("returns false for 1", () => {
    assert.strictEqual(isPrime(1), false);
  });

  test("returns false for 0", () => {
    assert.strictEqual(isPrime(0), false);
  });

  test("returns false for negative numbers", () => {
    assert.strictEqual(isPrime(-5), false);
  });

  test("returns true for 13", () => {
    assert.strictEqual(isPrime(13), true);
  });

  test("returns true for large prime 2147483647", () => {
    assert.strictEqual(isPrime(2147483647), true);
  });
});

// 13. Factorial
describe("factorial", () => {
  test("returns 120 for factorial(5)", () => {
    assert.strictEqual(factorial(5), 120);
  });

  test("returns 1 for factorial(0)", () => {
    assert.strictEqual(factorial(0), 1);
  });

  test("returns null for negative numbers", () => {
    assert.strictEqual(factorial(-3), null);
  });

  test("returns 1 for factorial(1)", () => {
    assert.strictEqual(factorial(1), 1);
  });

  test("returns 3628800 for factorial(10)", () => {
    assert.strictEqual(factorial(10), 3628800);
  });

  test("returns 6 for factorial(3)", () => {
    assert.strictEqual(factorial(3), 6);
  });
});

// 14. Fibonacci
describe("fibonacci", () => {
  test("returns [0, 1, 1, 2, 3, 5, 8] for fibonacci(7)", () => {
    assert.deepStrictEqual(fibonacci(7), [0, 1, 1, 2, 3, 5, 8]);
  });

  test("returns [0] for fibonacci(1)", () => {
    assert.deepStrictEqual(fibonacci(1), [0]);
  });

  test("returns [] for fibonacci(0)", () => {
    assert.deepStrictEqual(fibonacci(0), []);
  });

  test("returns [] for negative numbers", () => {
    assert.deepStrictEqual(fibonacci(-5), []);
  });

  test("returns first 10 fibonacci numbers", () => {
    assert.deepStrictEqual(fibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});

// 15. GCD
describe("gcd", () => {
  test("returns 4 for gcd(12, 8)", () => {
    assert.strictEqual(gcd(12, 8), 4);
  });

  test("returns 6 for gcd(54, 24)", () => {
    assert.strictEqual(gcd(54, 24), 6);
  });

  test("returns 5 for gcd(0, 5)", () => {
    assert.strictEqual(gcd(0, 5), 5);
  });

  test("returns 5 for gcd(5, 0)", () => {
    assert.strictEqual(gcd(5, 0), 5);
  });

  test("returns null for negative numbers", () => {
    assert.strictEqual(gcd(-5, 10), null);
  });

  test("returns 1 for coprime numbers gcd(17, 13)", () => {
    assert.strictEqual(gcd(17, 13), 1);
  });

  test("returns 25 for gcd(100, 75)", () => {
    assert.strictEqual(gcd(100, 75), 25);
  });

  test("returns 1 for gcd(7, 3)", () => {
    assert.strictEqual(gcd(7, 3), 1);
  });

  test("returns 4 for gcd(20, 8)", () => {
    assert.strictEqual(gcd(20, 8), 4);
  });

  test("returns 27 for gcd(81, 27)", () => {
    assert.strictEqual(gcd(81, 27), 27);
  });

  test("returns 6 for gcd(48, 18)", () => {
    assert.strictEqual(gcd(48, 18), 6);
  });

  test("returns 1 for gcd(101, 10)", () => {
    assert.strictEqual(gcd(101, 10), 1);
  });

  test("returns 14 for gcd(56, 98)", () => {
    assert.strictEqual(gcd(56, 98), 14);
  });
});

// 16. Merge objects
describe("mergeObjects", () => {
  test("merges two objects, second overwrites first", () => {
    const objA = { a: 1, b: 2 };
    const objB = { b: 3, c: 4 };
    assert.deepStrictEqual(mergeObjects(objA, objB), { a: 1, b: 3, c: 4 });
  });
});

// 17. Deep clone
describe("deepClone", () => {
  test("clones object without reference", () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    cloned.b.c = 3;
    assert.strictEqual(original.b.c, 2);
    assert.strictEqual(cloned.b.c, 3);
  });
});

// 18. Deep equal
describe("deepEqual", () => {
  // Basic equality
  test("returns true for identical objects", () => {
    assert.strictEqual(deepEqual({ a: 1 }, { a: 1 }), true);
  });

  test("returns false for different values", () => {
    assert.strictEqual(deepEqual({ a: 1 }, { a: 2 }), false);
  });

  // Nested objects
  test("returns true for identical nested objects", () => {
    assert.strictEqual(deepEqual({ a: { b: 1 } }, { a: { b: 1 } }), true);
  });

  test("returns false for different nested values", () => {
    assert.strictEqual(deepEqual({ a: { b: 1 } }, { a: { b: 2 } }), false);
  });

  // Different keys
  test("returns false for different keys", () => {
    assert.strictEqual(deepEqual({ a: 1 }, { b: 1 }), false);
  });

  test("returns false for different key count", () => {
    assert.strictEqual(deepEqual({ a: 1, b: 2 }, { a: 1 }), false);
  });

  // Arrays
  test("returns true for identical arrays", () => {
    assert.strictEqual(deepEqual([1, 2, 3], [1, 2, 3]), true);
  });

  test("returns false for arrays with different values", () => {
    assert.strictEqual(deepEqual([1, 2, 3], [1, 2, 4]), false);
  });

  test("returns false for arrays with different lengths", () => {
    assert.strictEqual(deepEqual([1, 2], [1, 2, 3]), false);
  });

  // Primitives
  test("returns true for equal primitives", () => {
    assert.strictEqual(deepEqual(1, 1), true);
  });

  test("returns true for equal strings", () => {
    assert.strictEqual(deepEqual("hello", "hello"), true);
  });

  test("returns false for different types", () => {
    assert.strictEqual(deepEqual(1, "1"), false);
  });

  // Null and undefined
  test("returns true for null === null", () => {
    assert.strictEqual(deepEqual(null, null), true);
  });

  test("returns true for undefined === undefined", () => {
    assert.strictEqual(deepEqual(undefined, undefined), true);
  });

  test("returns false for null vs undefined", () => {
    assert.strictEqual(deepEqual(null, undefined), false);
  });

  test("returns false for object vs null", () => {
    assert.strictEqual(deepEqual({}, null), false);
  });

  // Empty objects/arrays
  test("returns true for empty objects", () => {
    assert.strictEqual(deepEqual({}, {}), true);
  });

  test("returns true for empty arrays", () => {
    assert.strictEqual(deepEqual([], []), true);
  });

  test("returns false for empty object vs empty array", () => {
    assert.strictEqual(deepEqual({}, []), false);
  });

  // Same reference
  test("returns true for same reference", () => {
    const obj = { a: 1 };
    assert.strictEqual(deepEqual(obj, obj), true);
  });

  // Deeply nested
  test("returns true for deeply nested identical objects", () => {
    assert.strictEqual(
      deepEqual({ a: { b: { c: { d: 1 } } } }, { a: { b: { c: { d: 1 } } } }),
      true
    );
  });
});
