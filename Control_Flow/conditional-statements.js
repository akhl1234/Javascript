// Check if a number is positive, negative, or zero
function checkNumber(number) {
  if (number > 0) {
    console.log("Positive");
  } else if (number < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

// Check voting eligibility (age 18)
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

// Find the largest of three numbers
function findLargest(a, b, c) {
  let largest = a;
  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  console.log("Largest number:", largest);
}

// Determine the day of the week
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    default:
      console.log("Invalid day number");
  }
}

// Assign a grade based on a score
function assignGrade(score) {
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    default:
      console.log("F");
  }
}

// Check if a number is even or odd
function checkEvenOdd(number) {
  const result = number % 2 === 0 ? "Even" : "Odd";
  console.log(result);
}

// Check if a year is a leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
}

// this is the input examples i have used u can replace this with ur own and check ...
checkNumber(10);
checkVotingEligibility(20);
findLargest(5, 12, 8);
getDayName(3);
assignGrade(85);
checkEvenOdd(7);
isLeapYear(2024);
