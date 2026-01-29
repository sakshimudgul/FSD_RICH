
// Call , Apply and Bind

/*

Call() Method: The call() method calls the function directly and sets this to the 
first argument passed to the call method and if any other sequences of arguments 
preceding the first argument are passed to the call method then they are passed as 
an argument to the function.

Syntax:

call(objectInstance)
call(objectInstance, arg1,  argN)



// Example :

let nameObj = {
    name : "Sakshi",
}

let printName = {
    name :"Savi",
   a : function(age){
        console.log(this.name + "age is" + age);
    }
}

printName.a.call(nameObj,35);


function hello(){
    console.log("hello World!!");
}

hello.call();

const user1 = {
    first_name : "Sakshi",
    age : 21,
    about : function(hobby,favMusician){
        console.log(this.first_name,this.age,hobby,favMusician);

    }
}

user1.about(); /// Sakshi 21 undefined undefined
``
const user2 = {
   first_name : "Chetan",
    age :23,
}

user1.about.call(user2); //chetan 23 undefined undefined
// call we add what will this represent 
// Which object reference will the this keyword of about function take
// Here user2 is passed

user1.about.call();//we be undefined
/// we need to pass what should be object reference

// passing argument from call methodd
user1.about.call(user1,"guitar","Darshan_raval");
//output : sakshi 21 guitar Darshan raval

*/


// -------------------------------------------------------------------------------

// so instead of above pattern we can do this

function about(hobby,favMusician){
     console.log(this.first_name,this.age,hobby,favMusician);

}

const user3 = {
     first_name : "Pravin",
     age : 24,
}

const user4 = {
     first_name : "Nambrata",
     age : 23,
}

about.call(user3); // Pravin 23 undefined undefined
// So with respect to user3 object here 
// the this keyword of about function will be handled
// hobby and favmusician is undefined here as no arguments were passed in call method
about.call(user4,"guitar","Darshan Raval");

// call(objectInstance,arg1,arg2)
// So with respect to user4 object here 
// the this keyword of about function will be handled
// hobby and favmusician is guitar and Darshan Raval respectively here as
// two args were passed
