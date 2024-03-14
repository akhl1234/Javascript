// Introduction to filter, map, and reduce and if you want revise and explore more go with MDN Documentation ** Remeber **
const intro = `Filter, map, and reduce are three higher-order functions commonly used when working with arrays. They provide a concise and expressive way to manipulate array elements.`;

// Example of filtering even numbers from an array
const filterArray = [2, 5, 8, 11, 14, 18, 21, 23];
const evenNumbers = filterArray.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Alternate return methods
const fillArr = [5, 9, 3, 6, 4, 2, 51, 31, 23];
const oddNums = fillArr.filter((num) => num % 2 === 1);
// console.log("Odd Numbers are: ", oddNums);

// Example of filtering fruits with short names
const fruits = ["Apple", "Mango", "Litchi", "Guava", "Pomogranate"];
const shortFruits = fruits.filter((fruit) => fruit.length <= 5);
// console.log("Short fruits:", shortFruits);

// Filtering products that match the pocket money
const gadgets = [
  { product: "Samsung Mobile", price: 59999 },
  { product: "Dell Laptop", price: 53986 },
  { product: "Pulsar Bike", price: 59486 },
  { product: "Scorpio Car", price: 104576 },
];

const affordableProducts = gadgets.filter((product) => product.price <= 59554);
const matchProduct = gadgets.filter(
  (type) => type.product === "Samsung Mobile"
);
console.log("Affordable products:", affordableProducts);
console.log("The product is: ", matchProduct);

// Map: iterate over an array and transform each element in the array using a callback function.
// It returns a new array with the transformed elements, without modifying the original array.

const integers = [4, 2, 3, 9, 6];
const square = integers.map((n) => n * n);
console.log(`Square of Integers are: ${square}`);

// Accessing fruits that I mentioned in the above variable
const capitalizeFruits = fruits.map((word) => word.toUpperCase());
console.log(capitalizeFruits);

// Example of chaining map and filter
const arr1 = [5, 3.5, 8, 6, 9];
const twoMap = arr1
  .map((add5) => add5 + 5)
  .map((multi2) => multi2 * 2)
  .filter((newNum) => newNum >= 24);
// console.log(twoMap);

// Reduce: applies a function against an accumulator and each element in the array to reduce it to a single value.
const introReduce =
  "The reduce function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.";

const array1 = [5, 4.2, 6, 3, 25];
const newArr = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  4
);
// console.log(
//   "This one first the add acc to current and then they work with given value= 4: ",
//   newArr
// );

// Array.prototype.reduceRight()
const Index = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const Reduce_Right = Index.reduceRight((acc, curr) => acc.concat(curr));
console.log(Reduce_Right);

// Filtering and Transforming Elements (Conditional Accumulation):

const Cloth = [
  { Size: "M", Product: "T-shirt", Price: 299 },
  { Size: "L", Product: "Shirt", Price: 395 },
  { Size: "M", Product: "Trouser", Price: 329 },
  { Size: "XL", Product: "Jeans", Price: 1499 },
];

const DiscountedCloth = Cloth.reduce((discounted, prod) => {
  if (prod.Price <= 350) {
    discounted.push({ ...prod, Price: prod.Price * 0.8 }); // the offer will we avilable for 20% discount
  }
  return discounted;
}, []);

// console.log(DiscountedCloth);

const data = [
  ["name", "Alice"],
  ["age", 30],
  ["city", "New York"],
];

const personObject = data.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
