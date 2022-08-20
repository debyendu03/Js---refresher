function printName(name) {
  console.log(name);
}

printName("Ricky");

// we use arrow function to use "this" keyword with meet to our expectation
const printName2 = (name, age) => {
  console.log(name);
};
printName2("Rahul");

// short arrow function with return value
const a = (num) => num * 2;
console.log(a(2));
