console.log("hello this is my first javascript file");
let total = 1 + 3;
console.log("Good bye");
alert("Hey you are on webpage");
let p = prompt("Enter your age");
if (p >= 18) {
    console.log("Welcome");
    alert("Welcome");
}
else {
    console.log("Sorry your age ", p, " is less than 18");
    alert("Sorry your age is less than 18");
}
let r = Math.random();
if (r < 0.5)
    console.log("Your number is less than 0.5");
else if (r < 0.7)
    console.log("Your number is less than 0.7");
else
    console.log("Your number is greater than 0.5");
console.log(r);