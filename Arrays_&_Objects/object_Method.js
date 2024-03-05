const person = {
  firstName: "Virat",
  lastName: "Kohli",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName());

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
