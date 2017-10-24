const user = {
    fname: 'Nahum',
    lname: 'Mor',
    age: 48
}

// פירוק של אוביקט למשתנים
const { fname, lname, age } = user;

console.log(fname)
console.log(lname)
console.log(age)

//סדר הפרמטרים באוביקט שהפונקציה מקבלת לא חשוב, העיקר שהשמות זהים
const message = ({ fname, lname, age }, a1) => {
    console.log(`My name is ${fname} ${lname} , age ${age} :) ${a1}`)
}
message(user, 'Hello');

//פירוק של מערך
const cars = ['Car-1', 'Car-2', 'Car-3'];

const [car1, car2, car3] = cars
console.log(car1)
console.log(car2)
console.log(car3)
console.log('==================================')
// איבר ראשון נכנס למשתנה השאר למערך
const [car11, ...rest] = cars
console.log(car11) // משתנה
console.log(rest) // מערך

const computers = [
    { type: 'Laptop', price: 124, os: 'Windows' },
    { type: 'Desk', price: 124, os: 'Mac' },
    { type: 'Desk', price: 124, os: 'Windows' },
    { type: 'Laptop', price: 124, os: 'Mac' },
    { type: 'Laptop', price: 124, os: 'Windows' },
];
const [{ type, os }] = computers;

console.log('OS: ', os);
console.log('Type: ', type);

//פירוק של אוביקט עם מערך
const worker = {
    names: ['Jacob', 'Sam', 'Ron', 'Dan']
}

const { names: [n1, n2, n3, n4] } = worker

console.log('Name: ', n2)
console.log('Worker: ', worker.names) // מחזיר מערך
console.log('Worker: ', ...worker.names) //מחזיר מחרוזת
