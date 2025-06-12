//1
const movie={
    title:"Bahubali",
    director:"Rajamouli",
    releaseYear: 2015
};
console.log(movie.title);

//2
function printUserDetails({name,email,age}){
    console.log(`User's name is ${name}, and they are ${age} years old.`);
}
const user={
    name:"Himaghna Das",
    email:"himaghna.das@minfytech.com",
    age:20
};
printUserDetails(user);

//3
const users=[
    {id:1, username:"Himaghna"},
    {id:2, username:"Rahul"},
    {id:3, username:"Sourav"}
];
let foundUser=users.find(user=> user.id ===3);
console.log(foundUser);

