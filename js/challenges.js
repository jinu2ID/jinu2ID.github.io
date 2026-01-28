// String Challenges

// 1. Reverse a string — reverse("hello") → "olleh"
const reverseString = (str) => {
  return [...str].reverse().join("");
};

// 2. Check if palindrome — isPalindrome("racecar") → true
const isPalindrome = (str, isCaseInsensitive = false) => {
  if (isCaseInsensitive) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
  } else {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }
};

// 3. Count vowels — countVowels("hello") → 2
const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

// 4. Capitalize words — capitalize("hello world") → "Hello World"
const capitalize = (str) => {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};

// 5. Remove duplicates — unique("hello") → "helo"
const unique = (str) => {
  return [...new Set(str)].join("");
};

// Array Challenges ----------------------------------------

// 6. Find largest — findMax([1, 5, 3]) → 5
const findMax = (arr) => {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

// 7. Sum all — sum([1, 2, 3]) → 6
const sum = (arr) => {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
};

// 8. Remove duplicates — unique([1, 2, 2, 3]) → [1, 2, 3]
const uniqueArray = (arr) => [...new Set(arr)];

// 9. Flatten array — flatten([[1, 2], [3, 4]]) → [1, 2, 3, 4]
const flatten = (arr) => arr.flat(Infinity);

// 10. Sort by property — Sort array of objects by a given key
const sortByKey = (arr, key, order = "asc") => {
  const multiplier = order === "asc" ? 1 : -1;
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1 * multiplier;
    if (a[key] > b[key]) return 1 * multiplier;
    return 0;
  });
};

// Logic Challenges ----------------------------------------

// 11. FizzBuzz — Print 1-100, "Fizz" for 3s, "Buzz" for 5s, "FizzBuzz" for both
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// 12. Is prime — isPrime(7) → true
const isPrime = (num) => {
  if (!Number.isInteger(num) || num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

// 13. Factorial — factorial(5) → 120
const factorial = (num) => {
  if (!Number.isInteger(num) || num < 0) return null;
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// 14. Fibonacci — fibonacci(7) → [0, 1, 1, 2, 3, 5, 8]
const fibonacci = (n) => {
  if (!Number.isInteger(n) || n <= 0) return [];
  const fibSeq = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
  }
  return fibSeq.slice(0, n);
};

// 15. GCD — gcd(12, 8) → 4
const gcd = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) return null;
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

// Object Challenges ----------------------------------------

// 16. Merge objects — Combine two objects
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

// 17. Deep clone — Copy object without reference
const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// 18. Check equality — Compare two objects deeply
const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  // check if both are objects, check for null since typeof null is "object" (javascript bug)
  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 == null || obj2 == null) {
    return false;
  }

  // check if both are arrays or both are not arrays
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
};

// 19. Array to object — toObject([["a", 1], ["b", 2]]) → {a: 1, b: 2}

// 20. Group by property — Group array items by a key

module.exports = {
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
  fizzBuzz,
  isPrime,
  factorial,
  fibonacci,
  gcd,
  mergeObjects,
  deepClone,
  deepEqual,
};
