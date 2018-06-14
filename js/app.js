console.log("JavaScript is running...");

// Counts from 1 to 20.
for (let i = 1; i <= 20; i++) {
	console.log(i);
};

// For loop that logs even numbers 0 - 200.
for (let i = 0; i <= 200; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
};

// Excited Kitten

// Love me, pet me! HSSSSSS!

for (let i = 1; i <= 20; i++) {
	console.log("Love me, pet me! HSSSSSS!");
};

//For every even number in the loop, a random phrase will be logged the console.
let phrase = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
let length = phrase.length;

for (let i = 0; i <= 20; i++) {
	let random = Math.floor(Math.random() * length);
	if (i % 2 === 0)
	console.log(phrase[random]);
};

//FizzBuzz
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz") 
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else {
    	console.log(i);
    }
};

//Getting to know you
const thom = ["Thom", 1000, "Christchurch"];
const karolin = ["Karolin", 16, "New York"];
const kristyn = ["Kristyn", 5, "Pittsburgh"];
const matt = ["Matt H", 186, "Philadelphia"];

thom[0] = "Gameboy";
karolin[1] = 17;
matt[2] = "Gotham City";
kristyn.pop();
kristyn.push("Brooklyn");

//Yell at the ninja turtles
const turtleTime = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
let length2 = turtleTime.length;

for (i = 0; i < length2; i++) {
	let shout = turtleTime[i];
	let print = shout.toUpperCase();
	console.log(print);
};



















