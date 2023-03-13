let dayNumber = Math.floor(Math.random() *7);
console.log(dayNumber);
if (dayNumber === 0) {
    console.log(`${dayNumber} is Sunday`);
}
else if (dayNumber === 1) {
    console.log(`${dayNumber} is Monday`);
}
else if (dayNumber === 2) {
    console.log(`${dayNumber} is Tuesday`);
}
else if (dayNumber === 3) {
    console.log(`${dayNumber} is Wednesday`);
}
else if (dayNumber === 4) {
    console.log(`${dayNumber} is Thursday`);
}
else if (dayNumber === 5) {
    console.log(`${dayNumber} is Friday`);
}
else if (dayNumber === 6) {
    console.log(`${dayNumber} is Saturday`);
}
else {
    console.log("Invalid day number");
}
