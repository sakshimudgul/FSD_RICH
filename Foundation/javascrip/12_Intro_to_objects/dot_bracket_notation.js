// Difference between Dot and Bracket Notation

/*
// 1.Difference case 1
// (fetching /accesing data through certain type of key)

// Here person hobbbie key has spasce in between
// we cannot store the ket without adding string litrals
*/
const person = {
    name: "Sakshi",
    age: 21,
    "hobbies of person": ['reading', 'dancing', 'travelling']
}
 
// console.log(person.hobbies of person); //invalild error

// in this case of accessing this type of key here
// we need to use bracket notation and not dot
// as dot notation notation give error due to dpace in between

// for option is bracket notation
console.log(person["hobbies of person"]);

// 2.Diffeence case 2
// Adding data

// created one variable

const key = "email";

const member = {
    name :"Savi",
    age : 22,
    "Person hobbies" : ['singing', 'dancing']

}
// Dot notation (adding email with key variable)

person.key ="savi@gmail.com";
console.log(person);
// here will adding data with dot notation
// the key variable it self considered key hereand
// not the data inside the key

// Bracket notation (adding data with key variable)
person[key] = "abcd@gmail.com";

console.log(person);

// here when we give key variable it fetches its value and 
// valus is assigned as key and to it email data in person object