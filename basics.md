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
