const Words = ["hello", "world", "hello", "javascript", "world"];

const wordCounts = Words.reduce((acc, word) => {
  // Check if the word exists in the accumulator
  if (acc[word]) {
    acc[word]++;
  } else {
    acc[word] = 1;
  }
  return acc;
}, {});

console.log(wordCounts);
