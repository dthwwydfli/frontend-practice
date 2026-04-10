//Given an array of students with scores, return a new array with only students who passed (score 50+), with their grade (A/B/C) added as a property, sorted A-C.

const students = [{name: "James", score:80}, {name: "Liza", score:55}, {name: "Andrew", score:39}];

const passed = students.filter((p)=>p.score>=50).map((p) => {
    if(p.score >=90){
        return { ...p, grade: "A" };
    } else if (p.score>=70){
        return { ...p, grade: "B" };
    } else if (p.score>=50){
       return { ...p, grade: "C" };
    } else{
        return { ...p, grade: "Fail" };
    }
});

console.log(passed);
