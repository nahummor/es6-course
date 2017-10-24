let getPromise = () => {
    let p = new Promise((resolve, reject) => {
        console.log('Start Work....');
        setInterval(() => {
            resolve('Yep Work done');
        }, 5000)
    })

    return p;
}

getPromise()
    .then((data) => {
        console.log(data);
        return 'data 1234'
    })
    .then((data2) => {
        //do more actions
        console.log(data2);
    })
    .catch((error) => {
        console.log(error);
    })

console.log('end of program')

// Get data from server
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        console.log('User ID: ', data.userId)
        console.log('Title: ', data.title)
    })