let grades = [50, 65, 80, 90, 40];

let passedGrades = grades.filter((g) => {
    return g >= 60
});
console.log(passedGrades);
