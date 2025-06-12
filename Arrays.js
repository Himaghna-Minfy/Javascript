//1
let colors = ["Blue","Green","Yellow"];
colors.push("Red");
colors.unshift("White");
console.log(colors);

//2
let numbers = [10, 20, 30, 40, 50];
let increased=numbers.map(num=> num+5);
console.log(increased);

//3
let scores = [25, 80, 45, 95, 60, 75];
let newscores=scores.filter(score=> score>=70);
console.log(newscores);

//4
let scores2 = [25, 80, 45, 95, 60, 75];
let average = scores2.reduce((sum,score)=>sum+score)/scores.length;
console.log(average);

