let mySet = new Set([])

mySet.add(123) // add only one time
mySet.add(123).add(123) // this work to

mySet.add(345)
mySet.add('just message')
mySet.add(455)
let obj = {
    fname: 'nahum',
    lname: 'mor'
}
mySet.add(obj)

console.log(mySet)

console.log(mySet.has(obj)) // true
console.log(mySet.has(455)) // true
console.log(mySet.has(4551)) // false
console.log('Set Size: ', mySet.size) // get Set size

// mySet.delete(obj) //delete item from set
console.log(mySet)

console.log([...mySet][1]) // get item in 1 position

// mySet.clear() // delete set
// console.log(mySet) // empty set

console.log('\nItems List...\n===========')
// for (let item of mySet) {
//     console.log(item)
// }

mySet.forEach((item) => {
    console.log(item)
})

let onlyNumbers = [...mySet].filter((item) => {
    if (!isNaN(item)) {
        return true
    }
})

console.log('Only Numbers: ', onlyNumbers)