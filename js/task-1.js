"use strict";

//======================================= slice

// const username = "Denys Flora"; 
// const result = username.slice(-5);
// console.log(username);
// console.log(result);

// const username = "Denys Flora Yuriyovich";
// const firstIndex = 6; 
// const lastIndex = 11;
// const myWord = username.slice(firstIndex, lastIndex);
// console.log(myWord);

//=======================================

//======================================= toLowerCase/toUpperCase

// const username = "Denys";
// const result1 = username.toUpperCase();
// const result = username.toLowerCase();
// console.log(result1);
// console.log(result);

//=======================================

//======================================= includes

// const banWord = `spam`;
// const text = `Hello world its spam`;
// const result = text.toLowerCase().includes(banWord); 
// console.log(result);

// const banWord1 = `spam`;
// const banWord2 = `nigga`;
// const banWord3 = `shit`;
// const text = `Hello world its spam`;
// const res1 = text.toLowerCase().includes(banWord1);
// const res2 = text.toLowerCase().includes(banWord2);
// const res3 = text.toLowerCase().includes(banWord3); 
// const result = res1 || res1 || res3;
// console.log(result);

// const username = `Username: ` + prompt(`enter your name`);
// const banWord = `***`;
// console.log(username);
// console.log(username.includes(banWord, 9));

//=======================================

//======================================= startsWith/endsWith

// const phone = prompt(`Enter your phone number`);
// if(phone.startsWith(`+49`)){
//     console.log(`Hello`);
// }else{
//     console.log(`...`);
// }

// const str = `My name is Denys i'm from Ukraine.`
// console.log(str.endsWith("."));

//=======================================

//======================================= indexOf

// const text = `Some Words is happens`;
// const firstIndex = text.indexOf(` `);
// const lastIndex = text.indexOf(` `, firstIndex + 7);
// console.log(firstIndex);
// console.log(lastIndex);
// console.log(text.slice(firstIndex + 1, lastIndex));

//=======================================

//======================================= lastIndexOf

// const text = `Some Words is happens`;
// const lastIndex = text.lastIndexOf(` `);
// const firstIndex = text.lastIndexOf(` `, lastIndex - 1);
// console.log(firstIndex);
// console.log(lastIndex);
// console.log(text.slice(firstIndex + 1, lastIndex));

//=======================================

//======================================= trim

// const text = "     Welcome to the Berlin  ";
// console.log(text.trim());

//======================================= replace

// let text = `Welcome to the Berlin`;
// text = text.replaceAll(" ", "_");
// console.log(text);

//=======================================

//======================================= cicles =======================================

// for(let i=0; i<5; i++){
//     console.log(i);
// }


// let selary = 1000;

// for(let i=0; i<=3; i++){
//     console.log(selary);
//     selary += 100;
// }



// function showString(str) {
//     for(let i=0; i<str.length; i++){
//         console.log(str[i]);
//     }
// }
// showString("Hello");


// const n = 10;
// for(let i=n; i>=0; i--){
//     console.log(i);
// }


// const n = 20;
// for(let i=n; i>=0; i-=5){
//     console.log(i);
// }


// const min = 10;
// const max = 20;
// let total = 0;
// for(let i=min; i<=max; i++){
//     total+=i;
// }

// console.log(total);


// let a = 10;
// a++;
// console.log(a);


// let salary = 1000;

// while (salary <= 3000) {
//     console.log(`More`);
//     salary += 250;
// }


// function myGame() {
//     const random = Math.round(Math.random() * 1000);
//     let userNumber;

// while (userNumber !== random) {
//     userNumber = +prompt(`Enter number:`)
//     if(userNumber>random){
//         console.log(`<`);
//     }else{
//         console.log(`>`);
//     }    
// }
//     console.log(random);
// }

// myGame();


// for(let i=1; i<50; i++){
//     console.log(i);
//     if(i % 7 === 0){
//         console.log(`Uraaaaaa!`);
//         break;
//     }
// }


// for(let i=1; i<50; i++){
//     if(i % 7 === 0){
//         continue;
//     }
//     console.log(i);
// }


// function crismastree(len) {
//     let str = '';
//     for(let i=0; i<len; i++){
//     const left = " ".repeat(len-i) + "*".repeat(i);
//     const right = "*".repeat(i);
//     str += left + right + '\n'
//     }
//     console.log(str);
// }

// crismastree(10);

//          **
//         ****
//        ******
//       ********
//      **********
//     ************
//    **************
//   ****************
//  ******************


// const currentNumber = 5;
// let total = 0;
// for(let i=0; i<currentNumber; i++){
//     total += i;
//     console.log(`${total} + ${i} = ${total + i}`);
// }
// console.log('Result', total);


// const start = 212;
// const end = 573;
// let number;

// for(let i = start; i < end; i++){
//     if(i % 5 === 0){
//         number = i;
//         break;
//     }
// }

// console.log(number);


