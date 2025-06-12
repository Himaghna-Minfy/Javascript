//1
const favouritefood = "Biriyani";
console.log(favouritefood);

//2
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

//3
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