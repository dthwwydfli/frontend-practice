//Write an arrow function called gradeScore that takes a number. Return "A" (90+), "B" (70+), "C" (50+), or "Fail" below 50. Test it with 4 different values.
const gradeScore = (grade) => {
    if(grade >=90){
        return "A";
    } else if (grade>=70){
        return "B";
    } else if (grade>=50){
       return "C";
    } else{
        return "Fail";
    }
};

console.log(gradeScore(98));
console.log(gradeScore(23));
console.log(gradeScore(50));
console.log(gradeScore(-1));