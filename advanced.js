//1
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

//2
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