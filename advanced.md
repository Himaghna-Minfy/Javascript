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
