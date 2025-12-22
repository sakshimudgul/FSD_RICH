// Nested destructing

const users = [
    {userid : 1,
    user_name : "Sakshi",
    gender : "Female",
    },
    {userid : 2,
    user_name : "Chetan",
    gender : "Male",
    },
    {userid :3,
    user_name : "Aasha",
    gender : "Female",
    },
    {userid : 4,
    user_name : "Yug",
    gender : "Male",
    }
]

const[,{user_name : user2_username,userid,gender},{gender:user3_gender,user_name: user3_name}] = users;
console.log(user2_username);
console.log(gender);
console.log(user3_gender);
console.log(user3_name);

/*
// Here we Destructured Array
// Where we have Objects as Value in it;
const[user1,user2,user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);
*/

// Now These Object also have key value pairs in it 
// how can we destructure it

/*
const[{user_name},,{gender}] = users;
console.log(user_name);
console.log(gender);
*/


// Assigning variable as well
// const[{user_name : user1_username,userid},,{gender:user3_gender}] = users;
// console.log(user1_username);
// console.log(user3_gender);
// console.log(userid);
