// ########################### Intro to Ojects ####################################

// Array are good but not sufficient for real world data.

// 1.Object is reference data type
// stored in similar to array in heap and stack pointer
// pointing all referece type act in same way


// 2. Obect are stored in key value pair
// 3.object dont have index


// ---------------------------------------------------------------------------


// How to create objects

// object create for person

const person = {
    
    name: "Sakshi",
    age: 21,
    hobbies: ['reading', 'dancing', 'travelling']
}

console.log(typeof person); 

// how to acces data from objects (Dot notation)
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// Accesing with help of key other way (Bracket notation)

console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbies"]);

// ---------------------------------------------------

// how to add key value pair in objects (Dot  noation)

person.gender ="Female";
console.log(person);


// how to add key value pair in objects with the help of (bracket notation


person["city"] = "Pune";
console.log(person);