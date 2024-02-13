// Heap Memory:The old_data object is allocated memory in the heap when it's declared.When you create a new object New_Data using Object.assign({}, old_data),
// stack:The variables old_data and New_Data are stored in the stack memory frame for the current execution context.
let old_data = {
    Name: "sham",
    E_mail: "user@gmail0.com",
    Age: 25,
  };
  
  let New_Data = Object.assign({}, old_data);
  New_Data.Age = 36;
  console.log(New_Data);
  console.log(old_data.Age);
  console.log(New_Data.Age);
  
  let U1 = {
    ids: "userId1",
    roll: 26,
  };
  let U2 = Object.assign({}, U1);
  U2.ids = "userId2";
  console.log(U1.ids);
  console.log(U2.ids);
  