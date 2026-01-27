// /Importatnt array  methods 

//  for each
// map
// reduce
// filter


// ------------------------------ for each ----------------------------
// It gives function as a parameter
// array.forEach(function(value,index,array){
//    //code
//    });
const numbers = [1,2,3,4,5];

function myFunc(number,index){
     console.log("index is",index);
     console.log(`${number}*5 = ${number*5}`);
     console.log(`index is ${index} and number is ${number}`);
     
}

myFunc( numbers[4],3);
myFunc( numbers[3],2);
myFunc( numbers[2],1);
console.log(numbers);
myFunc();

// for(let i =0 ; i < numbers.length ; i++){
//     myFunc(numbers[i],i);
// }

// myFunc( numbers[6],2);

numbers.forEach((a,b,c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
})



// -------------------------------------------------------------------------------------

const users = [
    {firstName:"Sakshi" , age: 21},
    {firstName:"Ovi" , age: 24},
    {firstName:"Aakash" , age: 40},
]

users.forEach((user)=>{
    console.log(user.firstName);
    console.log(users);
    // console.log(b);
    // console.log(c);
    
})

   const res = users.map( (a,b,c) => {
    console.log(a);
    console.log(b);
     console.log(c);
    return a.age;

})

console.log(res);