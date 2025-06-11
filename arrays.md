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

