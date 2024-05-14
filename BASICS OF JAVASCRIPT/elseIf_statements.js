let studentMarks = 70;
let Grade;

if(studentMarks < 25){
    Grade = "F"
} else if (studentMarks < 45) {
    Grade = "E"
} else if (studentMarks < 50){
    Grade = "D"
} else if (studentMarks < 60){
    Grade = "C"
} else if (studentMarks < 70){
    Grade = "B"
} else if (studentMarks < 80){
    Grade = "A"
} else {
    Grade = "A+"
}

console.log("Your grade:", Grade)