// object inside array

// very useful in real world appication

const users = [
    {
        userid : 1,
        userName :"sakshi",
    gender : "female",
    },
    {
        userid : 2,
        userName :"Chetan",
    gender : "male",
    },
    {
        userid : 3,
        userName :"kalyanni",
    gender : "female",
    },
    {
        userid : 4,
        userName :"yash",
    gender : "male",
    },
]

console.log(users);

// Itertating it

for(let user of users){
    console.log(user.userName);
    console.log(user.userid);
    console.log(user.gender);
    console.log(user);

}