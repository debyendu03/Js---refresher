// number Boolean and Strings are primitive types
let a = 3;
let b = a;
console.log(b);
a = 4;
console.log(b);

// where array and Objects are Reference types, they were not copy the value but rather copy the pointer.

const person = {
  nam: "Ricky",
};
const person2 = person;
console.log(person2);
// ^person2 print the same Object
person.nam = "Subhankar";
console.log(person2);
// ^person2 also changed when i change person, these are Reference types

// but to copy one Object value to another you should use the spread operator
const person3 = {
  ...person,
};
person.nam = "Rahul";
console.log(person3);
