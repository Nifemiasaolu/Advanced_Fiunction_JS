'use strict';

//////////////////////////
//======= Default Parameter =============
// const bookings = [];

// const createBooking = function (flightNum, 
//     numPassengers = 1, 
//     price = 999 * numPassengers
//     ){
  // ES5
//   numPassengers = numPassengers || 1;
//   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
// //   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LM123');
// createBooking('LM123', 2, 678);
// createBooking('LM123', 5);
// createBooking('LM123', undefined, 256);


///////////////////////////////////////////////
//======== Function: Value vs Reference ========

// const flight = 'LH234';
// const jonas = {
//     name:'Jonas Schmedtmann',
//     passport: 2475789686
// }
 
// const checkIn = function(flightNo, passenger) {
//     flightNo = 'LH123';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 2475789686) {
//         // alert('Checked In');
//     } else  {
//         // alert('Wrong passport!');
//     }
// }

// chedkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNo = flight;
// const passenger = jonas;


//  const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000);
//  }

//  newPassport(jonas);
//  checkIn(flight, jonas);

 ///////////////////////////////////////
//======= Call Back Function =========
// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// } 

// const upperFirstWord = function(str) {
//     const [first, ...others] =  str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher Order Function 
// const transformer = function(str, fn) {
//     console.log(`Original String; ${str}`);
//     console.log(`Transformed String: ${fn(str)}`);
// }

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// // JS Uses CallBack all the time 
// const high5 = function() {
//     // console.log('❣');
// }

// document.body.addEventListener('click', high5);
// ["Jonas", 'Martha', 'Adam'].forEach(high5);


/////////////////////////////////////
//========= Function Returning Function =========

//  const greet = function(greeting) {
//     return function(name) {
//         // console.log(`${greeting} ${name}`);
//     }
//  }

//  const greeter = greet('Hey');
//  greeter('Jonas');
//  greeter('Stephen');

//  greet('Hey')('Paul');

//  (Arrow Functon-Form) in Returning Function 
//  const greet2 = (greeting2) => (name2) => console.log(`${greeting2} ${name2}`);

//  const greeter2 = greet2('Hey');
//  greeter2('Jonas');
//  greeter2('Stephen');

 /////////////////////////////////////
//==========  Call and Apply Method ==========

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         // console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//     }
// }

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(457, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book;

// Does NOT WOrk 
// book(23, 'Sarah Williams')

//====== Using Call Method to manipulate 'this' keyword ======

// Call method calls a function
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 248, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Line',
//     iataCode: 'SW',
//     bookings: [],
// }

// book.call(swiss, 79, 'Jessica Rein');
// console.log(swiss);

//======= Apply Method ===========

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(eurowings, ...flightData);
// console.log(eurowings);


//=========== Bind Method ============
// Bind method returns a new function
// const bookEW = book.bind(eurowings);
// const bookSW = book.bind(swiss);
// const bookLH = book.bind(lufthansa);

// bookEW(45, 'Jay Nelson')

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann')
// bookEW23('Patrick Novas')

// With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// };
// lufthansa.buyPlane();
// document.querySelector('.buy').addEventListener('clcik', lufthansa.buyPlane.bind(lufthansa));
// console.log(lufthansa.buyPlane() .bind(lufthansa));

//==== Using Partial Application =====

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// addVat = value + value * rate;

// console.log(addVat(100));
// console.log(addVat(60));
// console.log(addVat(976));

//---- Using Function Returning Function -----
const addTax1 = function(rate) {
    return function(value) {
        // console.log(value + value * rate);
    }
}
const addVat1 = addTax1(0.25);
addVat1(500);
addVat1(872);
addVat1(471);

// addTax1(0.23)(5400); (Advanced and straight way)

//////////////////////////////////////////
//========= Immediately Invoked Function Expressions (IIFE) ========

const runOnce = function() {
    // console.log('This will never work again');

};

// IIFE 
(function() {
    // console.log('This will never work again');
    // const isPrivate = 23;
})();
// console.log(isPrivate);//won't work

// (() => console.log('This will ALSO never work again'))();

{
    // const isPrivate = 23;
}
// console.log(isPrivate);// won't stiil work, as it cannot access the variable.
// but var will work, but its not advisable 


/////////////////////////////////////////////////
//================= Closures =================
// A closure makes a function remember everything by the time created
const secureBooking =  function() {
    let passengerCount = 0;
    
    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
}

const booker = secureBooking();

booker();
booker();
booker();

// console.dir(booker);

//=== Examples ====

let f;

const g = function(){
    const a = 23;
    f = function() {
        console.log(a * 2);
    };
};

g();
f();
console.dir(f)
// Re-assigning f function

const h = function(){
    const b = 773;
    f = function() {
        console.log(b * 2);
    };
};

h();
f();
console.dir(f);

// Example 2
 const boardPassengers = function(n, wait) {
    const perGroup = n/3

    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`);
}

// const perGroup = 1000
boardPassengers(180, 3)