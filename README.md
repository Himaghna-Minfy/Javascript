BASICS

Q1) [Easy] Declare a variable named favoriteFood using const and assign it a string value of your favorite food. Print it to the console.

->CODE
```js
const favouritefood = "Biriyani";
console.log(favouritefood);
```
->OUTPUT

![image](https://github.com/user-attachments/assets/215a57b0-a648-41d5-9057-0ed5c46e4122)



Q2) [Easy] Create two variables, numA and numB, and assign them number values. Write an if/else statement to print which number is larger or if they are equal.

->CODE
```js
var numA=2;
var numB=4;
if(numA<numB){
    console.log("numB is greater");
}
else if(numB<numA){
    console.log("numA is greater");
}
else{
    console.log("Both are equal");
}
```
->OUTPUT

![image](https://github.com/user-attachments/assets/553cec32-56df-4438-8eb7-5ff91337cc09)



Q3) [Medium] Write a for loop that prints the numbers from 1 to 20. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

->CODE
```js
for(let i=1;i<=20;i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }
    else if(i%3 ===0){
        console.log("Fizz");
    }
    else if(i%5===0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
```
->OUTPUT

![image](https://github.com/user-attachments/assets/89fe209b-d266-46a5-8ac5-0e429e8627db)



ARRAYS

Q1) 1. **[Easy]** Create an array named `colors` with three of your favorite colors.
    - Add a fourth color to the end of the array.
    - Add a new color to the beginning of the array.
    - Print the final array to the console.

CODE->
```js
let colors = ["Blue","Green","Yellow"];
colors.push("Red");
colors.unshift("White");
console.log(colors);
```

OUTPUT->

![image](https://github.com/user-attachments/assets/1889bda2-52b3-436b-a6ce-e78aec5b1a7c)


Q2) [Medium] Given the array let numbers = [10, 20, 30, 40, 50];, use the map method to create a new array where each number is increased by 5.

CODE->
```js
let numbers = [10, 20, 30, 40, 50];
let increased=numbers.map(num=> num+5);
console.log(increased);
```

OUTPUT->

![image](https://github.com/user-attachments/assets/9b98d4f9-1f80-467e-9f6a-d29207e00336)


Q3) [Medium] Given the array let scores = [25, 80, 45, 95, 60, 75];, use the filter method to create a new array containing only the scores that are 70 or higher.

CODE->
```js
let scores = [25, 80, 45, 95, 60, 75];
let newscores=scores.filter(score=> score>=70);
console.log(newscores);
```

OUTPUT->

![image](https://github.com/user-attachments/assets/b2caba41-08a2-404e-aa00-fdf428b14ad6)


Q4) [Hard] Use the reduce method on the scores array from the previous question to calculate the average score. (Hint: sum all scores and then divide by the number of scores).

CODE->
```js
let scores = [25, 80, 45, 95, 60, 75];
let average = scores.reduce((sum,score)=>sum+score)/scores.length;
console.log(average);
```

OUTPUT->

![image](https://github.com/user-attachments/assets/337b3a92-d606-4508-87a4-1c2c32ace3dd)

OBJECTS

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

ADVANCED

Q1) **[Hard]** Write a function called `getHighAchievers`. This function should accept two arguments: an array of student objects and a `passingScore` number. Each student object will look like this: `{ id: 1, name: 'Alice', score: 85 }`.
    - The function should **filter** the students to get only those with a score greater than or equal to `passingScore`.
    - It should then use **map** to return a new array containing only the names of the high-achieving students, in all uppercase letters.
    - Example: `getHighAchievers(students, 80)` might return `["ALICE", "BOB"]`.

CODE->
```js
function getHighAchievers(students,passingScore){
    return students
        .filter(student=> student.score>=passingScore)
        .map(student=>student.name.toUpperCase());
}
const students=[
    {id:1,name:"Alice", score:85},
    {id:2,name:"Bob", score:90},
    {id:3,name:"Charlie", score:70}
];
console.log(getHighAchievers(students,80));

```

OUTPUT->

![image](https://github.com/user-attachments/assets/2b990076-bd06-49c9-9825-a94cf53364ed)


Q2) **[Hard]** Write a function called `createGame`.
    - This function should not take any arguments.
    - Inside `createGame`, create a "private" variable called `secretNumber` and assign it a random number between 1 and 10.
    - `createGame` should **return another function**. Let's call this inner function `guess`.
    - The returned `guess` function should accept one argument, a number.
    - When you call `guess`, it should compare the guessed number to the `secretNumber` it remembers (this is a **closure**!).
    - It should log "You guessed it!", "Too high!", or "Too low!".
    - Test it:


CODE->

```js
function createGame(){
    const secretNumber=Math.floor(Math.random()*10 +1);
    return function guess(number){
        
        if(number===secretNumber){
            console.log("correct");
        }
        else if(number != secretNumber){
            console.log("incorrect");
        }
        else {
            console.log("invalid input");
        }
    };
}
const game=createGame();
game(5);
```

OUTPUT->

![image](https://github.com/user-attachments/assets/083d7ace-b9ec-4c23-9bed-7f9d984bc0b9)
