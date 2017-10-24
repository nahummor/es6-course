
const paintings = [
    { name: 'Mona lisa', width: 200, height: 200 },
    { name: 'The scream', width: 400, height: 600 },
    { name: 'The last supper', width: 600, height: 700 }
]

const paintingMsg = paintings.map((paint) => {
    return `The ${paint.name} is ${paint.width} X ${paint.height}`
})

paintingMsg.forEach((item) => {
    console.log(item);
})

const cars = [
    { name: 'Ford', price: 200 },
    { name: 'Nissan', price: 400 },
    { name: 'Nissan', price: 600 }
]
function converPrice(price) {
    return price * 3.6
}

const carNewPrice = cars.map((car) => {
    return `${car.name} is ${converPrice(car.price)} USD`
})
carNewPrice.forEach((item) => {
    console.log(item);
})

const channels = [
    { name: 'HBO', premium: true },
    { name: 'LIFE', premium: false },
    { name: 'Max', premium: true },
    { name: 'Cooking channel', premium: false },
    { name: 'WOBI', premium: false }
];

const premiumChanel = channels.filter((item) => {
    return item.premium
})

console.log(premiumChanel)

