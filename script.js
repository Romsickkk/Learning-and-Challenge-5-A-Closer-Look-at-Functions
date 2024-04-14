//
//======================================================================================
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2);
// createBooking("LH123", 2, 800);
// createBooking("LH123", 5);

// createBooking("LH123", /*""*/ undefined, 1000);

// const flight = "LH123";

// const gevor = {
//   name: "Gevorg Hakobyan",
//   pasport: "AP" + 32487324,
// };
// const roma = {
//   name: "Roman Babayan",
//   pasport: "AP" + 123314144,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr." + passenger.name;

//   if (passenger.pasport === "AP" + 123314144) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport!");
//   }
// };
// // checkIn(flight, roma);
// // checkIn(flight, gevor);
// // console.log(flight);
// // console.log(roma);

// // // Is the same as doing...
// // const flightNum = flight;
// // const passenger = roma;

// const newPassport = function (person) {
//   person.pasport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(roma);
// checkIn(flight, roma);

//====================================================================================
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(" ");
//   return [first.toUpperCase(), ...other].join(" ");
// };

// //Higher-order function
// const transformer = function (str, func) {
//   console.log(`Original string ${str}`);
//   console.log(`Transformed string: ${func(str)}`);
//   console.log(`Transformed by: ${func.name}`);
// };

// transformer("JavScript is the best!", upperFirstWord);
// transformer("JavScript is the best!", oneWord);

// // JS users callback all the time
// const high5 = function () {
//   console.log("👋");
// };
// document.body.addEventListener("click", high5);

// ["Jonas", "Martha", "Adam"].forEach(high5);

//========================================================================================
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Roma");
// greeterHey("Gevor");

// greet("Hello")("Roma");

// const func = (greeting) => (name) => console.log(`${greeting} ${name}`);
// func("Hello")("Roma");

//=======================================================================================

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`,
//       name,
//     });
//   },
// };

// lufthansa.book(234, "Roman Babayan");
// lufthansa.book(456, "Nikita Rudenko");
// console.log(lufthansa);

// const eurowing = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
//   //   book,
// };
// const book = lufthansa.book;
// // eurowing.book(15, "Roman Babayan");
// // book(23, "Sarah Williams");

// //Call method
// book.call(eurowing, 23, "Sarah Williams");
// console.log(eurowing);

// book.call(lufthansa, 234, "Marry Cooper");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 345, "Artem Artemovich");
// console.log(swiss);

// //Applay method
// const flightData = [124, "George Cooper"];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind method
// //book.call(eurowing, 23, "Sarah Williams");

// const bookEW = book.bind(eurowing);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, "Steven Williams");

// const bookEW23 = book.bind(eurowing, 23);
// bookEW23("Roman Babayan");
// bookEW23("Marta Cooper");

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT =  value => value + value * 0.23;
// console.log(addVAT(200));
// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVat2 = addTaxRate(0.23);
// console.log(addVat2(100));
// console.log(addVat2(23));

///////////
//========================================================================================
// const runOnce = function () {
//   console.log("This will run once");
// };
// runOnce();

// IIFE
// (function () {
//   console.log("This will run once");
//   const isPrivate = 24;
// })();

// // console.log(isPrivate);

// (() => console.log("This will run once"))();

// {
//   const isPrivate = 24;
//   var notPrivate = 25;
// }
// // console.log(isPrivate);
// console.log(notPrivate);

//=====================================================================================
// // Closuer
// const secuteBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secuteBooking();

// // secuteBooking();
// booker();
// booker();
// booker();

// console.dir(booker);
/////////////////////////////////////////////////////////////////////////////////////
// Example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// //Re - assigning f functoion
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(() => {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassengers(180, 3);

//=========================================== Challenge #1 ========================================================
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     let getNum = Number(
//       prompt(`${this.question}\n${this.options.join("\n")} `)
//     );

//     typeof getNum === "number" &&
//       getNum < this.answers.length &&
//       this.answers[getNum]++;

//     this.displayResults();
//     this.displayResults("string");
//   },

//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 2] });

//
//=========================================== Challenge #2 ========================================================
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

$(document).ready(function () {
  console.log("asd");

  function test() {
    console.log("from test()");
  }

  $("#myButton").click(function () {
    console.log("you have clicked the myButton");
  });
});
