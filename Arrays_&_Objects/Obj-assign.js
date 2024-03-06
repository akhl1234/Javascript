let A1 = { Name: "Anything", Age: 35 };
let A2 = { Section: "A3", City: "City-Name" };

let target = {};
// method-Object.assign(target, source1, source2, /* …, */ sourceN)
Object.assign(target, A1, A2); // remeber Object with correct spell
console.log(target);
