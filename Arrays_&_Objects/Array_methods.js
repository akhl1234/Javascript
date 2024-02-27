const fruits = ['apple', 'banana', 'cherry', 'date'];


fruits.push('elderberry');
console.log(fruits);

//pop(): Removes the last element from an array.
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

//shift(): Removes the first element from an array and returns that element,
const firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits); 

//unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift('apricot', 'grape');
console.log(fruits); //'apricot', 'grape', 'banana', 'cherry', 'date']

//slice(): Returns a shallow copy 
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); //'grape', 'banana']

//splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
fruits.splice(2, 0, 'kiwi', 'lemon');
console.log(fruits);
