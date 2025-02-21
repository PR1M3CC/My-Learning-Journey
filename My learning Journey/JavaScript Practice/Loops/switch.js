let marks = 44
let rounded = Math.round(marks/10)*10
console.log(`Marks obtained are ${rounded}`);

switch (rounded) {
    case 80:
        console.log("Good");
        break;
    case 90:
        console.log("Nice");
        break;
    case 100:
        console.log("Excellent");
        break;
    case 60:
            console.log("Fair");
            break;
    case 50:
        console.log("bad");
        break;
    default:
        console.log("Failed");
        break;
}