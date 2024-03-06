const Destructure = {
  Name: "Salman",
  City: "Mumbai",
  Profession: "Actor",
  Contact: {
    mobile: "+91144111",
    Mail: "Salamn_Email",
  },
};

const {
  Name,
  Contact: { mobile, Mail },
} = Destructure;

console.log(Name);
console.log(Mail);
