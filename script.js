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

 ///////////////////////////////
//======= Functions Accepting Call Back Function =========
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

 ////////////////////////////////////
//==========  Call and Apply Method ==========

const lufthansa = {
    airline: 'Lufthansa',
    iotaCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iotaCode}${flightNum}`);
        this.bookings.push({flight: `${this.iotaCode}${flightNum}`, name})
    }
}

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(457, 'John Smith');
console.log(lufthansa);

const eurowings = {
    name: 'Eurowings',
    iotaCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

// Does NOT WOrk 
// book(23, 'Sarah Williams')

// Using Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 248, 'Mary Cooper');
console.log(lufthansa);