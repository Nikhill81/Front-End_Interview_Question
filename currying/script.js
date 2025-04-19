// function add(a) {
//     return function(b){
//         return function(c) {
//             return a + b + c
//         };
//         };
// }

// console.log(add(2)(3)(4));

const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3));

// ----------------------------------------------------


const sendAutoMail = (to) => (subject) => (body) => `sending Email to ${to} with the subject of ${subject}: ${body}`;

let step1 = sendAutoMail("NikhilMishra@test.com");
let step2 = step1("New order Confirmatiokn");

console.log(step2("hey nikhil , Here is something for you"))