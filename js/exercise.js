let assignGrade = (grade) =>{
    if(grade >= 100) return 'A';
    else if(grade < 100 && grade >= 90 ) return 'B';
    else if(grade < 90 && grade >=85) return 'C';
    else if(grade < 85 && grade >=80) return 'D';
    else if(grade < 80 && grade >=75) return 'E';
    else return 'F';
}

console.log(assignGrade(89));
console.log(assignGrade(90));


// Get 5 elements using ID
console.log(document.getElementById("modal"));
console.log(document.getElementById("bottom1"));
console.log(document.getElementById("bottom2"));
console.log(document.getElementById("bottom3"));
console.log(document.getElementById("search"));

