let myMap = new Map()
let worker1 = {
    fname: 'David',
    lname: 'Swartz'
}
let worker2 = {
    fname: 'nahumm',
    lname: 'mor'
}

myMap.set('w1', worker1)
myMap.set('w2', worker2)
myMap.set('text1', 'Just text 12345456')
myMap.set('showMessage1', () => {
    console.log('Hello from function')
})
myMap.set('showMessage2', (msg) => {
    return `user say ${msg}`
})
console.log(myMap)

console.log('w1 => : ', myMap.get('w1'))
console.log('w1 fname => : ', myMap.get('w1').fname)
myMap.get('showMessage1')()
console.log(myMap.get('showMessage2')('jast text bla bla ......'))

console.log('Map size: ', myMap.size)
console.log(myMap.has('w2')) // return true
console.log(myMap.has('w22')) // return false

myMap.delete('w1') // delete w1 key
console.log(myMap)

//myMap.clear() // delete all map
console.log('========================================')
for (let [key, value] of myMap) {
    console.log('KEY: ', key)
    console.log('Value: ', value)
}

console.log('========================================')
myMap.forEach((value, key) => {
    console.log('KEY: ', key)
    console.log('Value: ', value)
})

//create array from key
console.log('Map Keys: ', Array.from(myMap.keys()))
//create array from values
console.log('Map Values: ', Array.from(myMap.values()))

let keys = Array.from(myMap.keys())
    .map((item) => {
        return `- ${item} -`
    })

console.log(keys)