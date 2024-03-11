const data = [
  { id: 1, name: "Shameer", friends: ["Virat", "Dhoni"] },
  { id: 2, name: "Akhlaque", friends: ["Amir", "Salman"] },
];

data.forEach((person) => {
  console.log("Person:", person.name);
  person.friends.forEach((friend) => console.log("  Friend:", friend));
});

const users = [
  { name: "Amir", isAdmin: true },
  { name: "Raju", isAdmin: false },
];

users.forEach((user) => {
  if (user.isAdmin) {
    console.log("Admin:", user.name);
  } else {
    console.log("Regular User:", user.name); // Improved output for non-admins
  }
});
