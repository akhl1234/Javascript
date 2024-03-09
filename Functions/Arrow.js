// Let's explore some examples---

let User = {
  Name: "Akhlaque",
  Profession: "Programmer",
  Roll_Code: 786,

  Welcome: function UsingThis() {
    console.log(`My Name Is ${this.Name}. Thanks!`);
    console.log(this); // It will print everything--
  },
};

User.Welcome();
// User.Name = "Shameer"; // The name will change---
// User.Welcome();

// Let's explore the power of the `this` keyword--

function PowerThis() {
  console.log(this);
}

PowerThis();
