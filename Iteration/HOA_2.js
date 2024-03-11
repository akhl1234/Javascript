// for in method --
let Programming = {
  JS: "Javascript",
  ES6: "ECMA-Script",
  CPP: "C++",
  Swift: "Swift By Apple",
};
for (const key in Programming) {
  console.log(key);
}
for (const key in Programming) {
  console.log(`${key} stands for ${Programming[key]}`);
}

// for in arrays---
let array_js = ["var", "data-types", "maths", "strings", "operators"];
for (const data in array_js) {
  console.log(data);
}

// for each(): methods--
let Nums = [2, 4, 9, 8];
Nums.forEach((element, index, Nums) => {
  console.log(element, index, Nums);
});

// examples checking even or not--
const numbers = [2, 4, 6];
let allEven = true;

numbers.forEach((number) => {
  if (number % 2 !== 0) {
    allEven = false;
  }
});

console.log(allEven);
