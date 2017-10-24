function totalDistance(...distance) {
    let distances = [...distance]
    // let total = 0;
    // for (var i = 0; i < distances.length; i++) {
    //     total += distances[i]
    // }
    return distances.reduce((start, item) => {
        return start + item
    }, 0)
    //return total;
}

console.log(totalDistance(200, 100, 200))

function showItems(arg1, ...arg2) {
    let arr = [...arg1, ...arg2]
    console.log(arr)
}
showItems(["dogs", "cats"], "turtles", "sharks");