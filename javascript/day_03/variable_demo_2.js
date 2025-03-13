
var a = 10;
let b = 20;
const c = 30;
console.log(`a: ${a}  b: ${b}  c: ${c}`);

a = 15;
b = 25;
// c = 35; // TypeError: Assignment to constant variable
console.log(`a: ${a}  b: ${b}  c: ${c}`);

const students = ['hi', 'hi'];
console.log(students);
students.push('you'); // push is allowed
console.log(students);
// students = ['Manish','Tejdeep'];  // not allowed
// trying to assign a new array to the variable students

let user = { name: 'me', add: 'va' };
user.age = 25; // add a new property - yes
console.log(user);
// user = { name: 'Manish', age: 28 }; // No
