Q1) [Easy] Create an object named movie with properties for title, director, and releaseYear. Print the title of the movie to the console.

CODE->
```js
const movie={
    title:"Bahubali",
    director:"Rajamouli",
    releaseYear: 2015
};
console.log(movie.title);
```

OUTPUT->

![image](https://github.com/user-attachments/assets/ea9089f7-2013-476e-969a-12428823c33a)


Q2) [Medium] Write a function called printUserDetails that takes a user object as an argument. The user object will have name, email, and age properties. The function should use object destructuring in its parameters to print a string like: "User's name is [NAME], and they are [AGE] years old."

CODE->
```js
function printUserDetails({name,email,age}){
    console.log(`User's name is ${name}, and they are ${age} years old.`);
}
const user={
    name:"Himaghna Das",
    email:"himaghna.das@minfytech.com",
    age:20
};
printUserDetails(user);
```

OUTPUT->

![image](https://github.com/user-attachments/assets/567bf9a0-c7ee-4675-85ef-c7d383cbcef1)


Q3) [Medium] Create an array of user objects. Each object should have an id and a username. Use the find method to find the user with a specific id.

CODE->
```js
const users=[
    {id:1, username:"Himaghna"},
    {id:2, username:"Rahul"},
    {id:3, username:"Sourav"}
];
let foundUser=users.find(user=> user.id ===3);
console.log(foundUser);
```

OUTPUT

![image](https://github.com/user-attachments/assets/0de0977b-6ff4-4478-856e-7a453bfcda03)

