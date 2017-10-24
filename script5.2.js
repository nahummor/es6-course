let name = "Francis";
let lastname = "Jones"
let age = 23;

let createObject = (name, lastname, age) => {
    return { name, lastname, age }
}

console.log(createObject(name, lastname, age))


function greeting(name = 'user') {
    return `Hello ${name}`
}
console.log(greeting('nahumm'))
