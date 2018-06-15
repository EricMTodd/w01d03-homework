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

for (let i = 0; i < length2; i++) {
	let shout = turtleTime[i];
	let print = shout.toUpperCase();
	console.log(print);
};

//Return of the closets
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

kristynsShoe = kristynsCloset[0];
thomsCloset[2].push(kristynsShoe);



const kristynsOutfit1 = [];
const kristynsOutfit2 = [];
const kristynsOutfit3 = [];

const thomsOutfit1 = [];
const thomsOutfit2 = [];
const thomsOutfit3 = [];



kristynsOutfit1.push(kristynsCloset[5]);
kristynsOutfit1.push(kristynsCloset[3]);
kristynsOutfit1.push(kristynsCloset[4]);

kristynsOutfit2.push(kristynsCloset[3]);
kristynsOutfit2.push(kristynsCloset[4]);
kristynsOutfit2.push(kristynsCloset[1]);

kristynsOutfit3.push(kristynsCloset[5]);
kristynsOutfit3.push(kristynsCloset[0]);
kristynsOutfit3.push(kristynsCloset[2]);


thomsOutfit1.push(thomsCloset[0][1]);
thomsOutfit1.push(thomsCloset[1][2]);
thomsOutfit1.push(thomsCloset[2][0]);

thomsOutfit2.push(thomsCloset[2][0]);
thomsOutfit2.push(thomsCloset[1][1]);
thomsOutfit2.push(thomsCloset[0][2]);

thomsOutfit3.push(thomsCloset[1][2]);
thomsOutfit3.push(thomsCloset[2][1]);
thomsOutfit3.push(thomsCloset[0][0]);


//Dirty laundry
for (let i = 0; i < kristynsCloset.length; i++) {
  console.log("WHIRR: Now washing " + kristynsCloset[i])
};

//Thom's closet inventory
for (let i = 0; i < thomsCloset.length; i++) {
  for (let k = 0; k < thomsCloset.length; k++) {
    console.log(thomsCloset[i], [k]);
  }
};

//Multiples of 3 and 5
let sum = 0;
for (let i = ; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);










