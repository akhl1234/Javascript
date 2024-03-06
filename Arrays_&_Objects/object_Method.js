// Define object method using add calculator--

const calculator = {
  add: function (a, b) {
    return a + b;
  },
};
console.log(calculator.add(25, 3.5));

// Define a player object
const player = {
  Name: "Sarfaraz Khan",
  Role: "Batsman",
  Team: "KKR",
  Data() {
    return `${this.Name} (${this.Role}) - ${this.Team}`;
  },
};

console.log(player.Data());
