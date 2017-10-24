const trips = [
    { to: 'Brazil', distance: 1000 },
    { to: 'Chine', distance: 2500 },
    { to: 'India', distance: 3000 }
]

const totalDistance = trips.reduce((start, item) => {
    return start + item.distance
}, 0)

console.log('Total Distance: ', totalDistance)

const computers = [
    { type: 'Laptop', price: 124, os: 'Windows' },
    { type: 'Desk', price: 124, os: 'Mac' },
    { type: 'Desk', price: 124, os: 'Windows' },
    { type: 'Laptop', price: 124, os: 'Mac' },
    { type: 'Laptop', price: 124, os: 'Windows' },
];

let osCount = computers.reduce((start, computer) => {
    //דרך 1
    // if (computer.os === 'Windows') start.windows++
    // if (computer.os === 'Mac') start.mac++
    // return start
    //דרך 2
    return computer.os === 'Windows' ? { mac: start.mac, windows: start.windows + 1 } : { mac: start.mac + 1, windows: start.windows }
}, { mac: 0, windows: 0 })

console.log('Os Count: ', osCount)

console.log('\n\n*** for of ***')
for (let computer of computers) {
    console.log(computer.type, computer.price, computer.os)
}