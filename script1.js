
let user = {
    fname: 'nahum',
    lname: 'mor',
    age: 48,
    profession: 'IT',
    salary: 1500
}

function printUserProfile(user) {
    console.log(`My name is ${user.fname} ${user.lname}, i'm ${user.age} years old.
                 I work as ${user.profession} and make $${user.salary}.`)
}

printUserProfile(user)

const players = [
    { jersey: 56, name: "Djounte Murray", position: "Point guard", PPG: 2.6 },
    { jersey: 98, name: "Dennis Rodman", position: "Small Forward", PPG: 10.8 },
    { jersey: 1, name: "Michael Jordan", position: "Small Forward", PPG: 345.6 },
    { jersey: 2, name: "Lebron James", position: "Shooting Guard", PPG: 26.7 },
    { jersey: 33, name: "Patrick Ewing", position: "Center", PPG: 20.2 }
]

let li = ''
const ul = document.querySelector('.players')
players.forEach((player, index) => {
    //console.log(index)
    li += `<li>${player.jersey} - ${player.name} -- Position:${player.position} -- RPP:${Math.floor(player.PPG)} </li>`
});
ul.insertAdjacentHTML('beforeend', li)

const products = [
    { name: 'Iphone', price: 200 },
    { name: 'Motorola', price: 70 },
    { name: 'Samsung', price: 150 },
    { name: 'Sony', price: 98 },
    { name: 'Windows pone', price: 10 }
];

let innerDiv = ''
let div = document.querySelector('.products')
products.forEach((item, index) => {

    function isOnSale() {
        if (item.price < 100) {
            return '<span>On sale !!</span>'
        }
        return ''
    }

    innerDiv += `<div class="product">
                    <h1>${item.name}</h1>
                    <strong>Price: $${item.price}</strong>
                    ${isOnSale()}
                </div> `
})
div.insertAdjacentHTML('beforeend', innerDiv)
