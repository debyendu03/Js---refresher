// spread operators

//as array
let arr = [5, 6, 7];
console.log(arr);

let newArr = [...arr, 1, 2];
console.log(newArr);

// as Object
let obj = {
  name: "Ricky",
};
let newObj = {
  ...obj,
  age: 19,
};
console.log(newObj);

// REST OPERATOR

const filter = (...args) => {
  return args;
};
console.log(filter(1, 2, 3));
