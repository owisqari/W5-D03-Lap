const firstName = "owis";
const middleName = "mohammad";
const lastName = "qari";

const user = (firstName, middleName, lastName) => {
  console.log("==============function======================");
  console.log(`My name is ${firstName} ${middleName} ${lastName}`);
  console.log("====================================");
};

const allOperation = (a, b) => {
  console.log("==================allOperation==================");
  console.log(`adding of ${a} and ${b} is ${a + b}`);
  console.log(`subtracting of ${a} and ${b} is ${a - b}`);
  console.log(`multiple of ${a} and ${b} is ${a * b}`);
  console.log(`division of ${a} and ${b} is ${a / b}`);
  console.log("====================================");
};

const add = (a, b) => {
  const res = a + b;
  if (res > 100) {
    console.log("==================equle 100==================");
    console.log("true");
    console.log("====================================");
  } else {
    console.log("==================not equle 100==================");
    console.log("false");
    console.log("====================================");
  }
};

const mean = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log("==================mean==================");
  console.log(total / arr.length);
  console.log("====================================");
};

const VAT = (price) => {
  const vat = 0.15;
  const total = price + price * vat;
  console.log("==================VAT==================");
  console.log(total);
  console.log("====================================");
};

const isEven = (num) => {
  switch (num % 2) {
    case 0:
      console.log("==================isEven==================");
      console.log("even");
      break;
    case 1:
      console.log("==================isOdd==================");
      console.log("odd");
      break;
    default:
      console.log("not a number");
      break;
  }
};

const grades = (grade) => {
  if (grade >= 95) {
    console.log("A+");
  } else if (grade >= 90) {
    console.log("A");
  } else if (grade >= 85) {
    console.log("B+");
  } else if (grade >= 80) {
    console.log("B");
  } else if (grade >= 75) {
    console.log("C+");
  } else if (grade >= 70) {
    console.log("C");
  } else if (grade >= 65) {
    console.log("D+");
  } else if (grade >= 60) {
    console.log("D");
  } else if (grade < 60) {
    console.log("F");
  }
};

const age = (age) => {
  const days = age * 365;
  console.log("==================age in days==================");
  console.log(days);
  console.log("====================================");
};

const leapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log("leap year");
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    console.log("leap year");
  } else {
    console.log("not a leap year");
  }
};

console.log("==================loop==================");
for (let i = 1; i <= 8; i++) {
  let space = "";
  for (let j = 1; j <= i; j++) {
    space += j + " ";
  }
  console.log(space);
}

console.log("==================Power==================");
let num = 0;
while (num <= 10) {
  console.log(num ** 2);
  num++;
}

console.log("==================odd==================");
let odd = 1;
while (odd <= 20) {
  console.log(odd);
  odd += 2;
}

console.log("==================for==================");
for (let i = 0; i <= 20; i++) {
  console.log(i);
  i++;
}
console.log("==================typeof==================");
console.log(typeof firstName, typeof middleName, typeof lastName);
console.log("====================================");

console.log("==================userData==================");
console.log(`My name is ${firstName} ${middleName} ${lastName}`);
console.log("====================================");

user("owis", "mohammed", "qari");
add(50, 55);

allOperation(8, 4);
mean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
VAT(100);
isEven(11);
grades(88);
age(25);
leapYear(2000);
