const names = ["James", "Ron", "Lisa", "Tommy"];

// let randomName = (items) => {
//     return items[Math.floor(Math.random() * items.length)]
// }

let randomName = items => items[Math.floor(Math.random() * items.length)]

// let randomNumber = (maxNumber, minNumber) => {
//     return Math.floor(Math.random() * maxNumber) + minNumber;
// }

let randomNumber = (maxNumber, minNumber) => Math.floor(Math.random() * maxNumber) + minNumber;


console.log(`${randomName(names)}  magic number is ${randomNumber(5, 2)}`)