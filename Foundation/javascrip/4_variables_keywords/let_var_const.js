//  Limitation of var

// ################# var keyword ##################33

//  1.declare with var keyword
// can stors information and decleare variable
var firstName = "Yatin Chaudhari";
// change existing value
firstName = "Sarthak";
console.log(firstName);

// can declare with same variable and overwrite value
 var firstName = "Ovi";
 console.log(firstName);

//  2. declare variable with let keyword

// #1.declare variable with let keyword
// can stors information and decleare variable
let first_Name = "Sachine"
// can  chnage existing value
first_Name = "Rohit";
console.log(first_Name);
// variable name is already declared 
// in let keyword case we cannat redeclare variable name it shows error
// let first_Name =" Chetan";
// console.log(first_Name);

// ####################### const keyword #####################33
// 3. declare constants
// whose values cannot be chanded
  
const pi = 3.14;
console.log(pi);
// can store information and declare constant

const pi1 = 3.14;
pi1 = 3.14;
// cannot change the const variable
console.log(pi1);

// block scope vs function scope
// var          let             const
// declare      declare         declare
// reassign       reasssign        --
// redeclare        --             --