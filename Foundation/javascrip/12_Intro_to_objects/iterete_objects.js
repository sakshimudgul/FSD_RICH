// how to itereate in objects

const person = {
    name : "Sakshi",
    age : 23,
    "person hobbies" : ['reading', 'dancing', 'travelling']
}

// ----------------------------------------------------------------
// two ways iterate through objects ::
// 1.for in loop
// 2.Object.keys() method

// //not ablwe to fetch with dot notation
// for(let key in person){
//    console.log(person.key);
// }


// ------------------------------------------------------------

// with the help of bracket notation 
// for (let key in person){
//    console.log(person[key]);
// }

// with the help of bracket notation key : value pairs


for(let key in person){
    console.log(key," : " ,person[key]);
}

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}



// -----------------------------------------------------------

//  object.keys(person);/

console.log(Object.keys(person));
// gives array of keys

console.log(Object.values(person));
// array of values

// ----------------------------------------------------------
console.log(typeof Object.values(person));
// checking that the Object.keys and Object.Values 
// do they return array as values

// ----------------------------------------------------------------

for(let key of Object.keys(person)){
    console.log(key);
}

for(let value of Object.values(person)){
    console.log(value);
}