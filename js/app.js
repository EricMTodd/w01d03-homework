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



