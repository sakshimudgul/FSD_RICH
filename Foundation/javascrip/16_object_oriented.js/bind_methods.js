/*
                 ######## Bind Method ############

Before implementing bind(), apply(), and call() polyfills, let us know what is a 
polyfill in JavaScript:

Polyfill: Polyfills are the implementation of the features that are given by our 
browsers, but may not be present in the previous versions of it.

1. Bind() Method: The bind() method creates a new function and when that new function
 is called it set this keyword to the first argument which is passed to the bind 
 method, and if any other sequences of arguments preceding the first argument are 
 passed to the bind method then they are passed as an argument to the new function 
 when the new function is called.

 */
// bind(thisArg, arg1 ,arg2 )
// bind(thisArg ,arg1 , arg2)

let nameObj = {
    name : "tony",
}

let printName = {
      name : "Sanika",
      sayHi : function(){
        //  Here "this" points to nameObj
        console.log(this.name);
      }
}

let HiFun = printName.sayHi.bind(nameObj);
HiFun();