class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const Person1 = new Person("Shahrukh", 52);
console.log(Person1.age);
console.log(Person1.name);

// class with parameter Values....

class Reactangle {
  constructor(length = 3, breadth = 4) {
    this.length = length;
    this.breadth = breadth;
  }
}

const rec1 = new Reactangle();
console.log(rec1.length);
console.log(rec1.breadth);

// Class with methods:---

class circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const circle1 = new circle(5.2);
console.log(circle1.getArea());
const circle2 = new circle(22);
console.log(circle2.getArea());

// class with set and get----
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount >= 0) {
      this._balance = amount;
    } else {
      console.log("Invalid amount.");
    }
  }
}

const account1 = new BankAccount(1000);
console.log(account1.balance);
account1.balance = -550;

// using spread operator ---

class Cart {
  constructor(...items) {
    this.items = items;
  }
}

const ShoppingBag = new Cart("Jeans", "t-shirt", "Lower");
console.log(ShoppingBag.items);
