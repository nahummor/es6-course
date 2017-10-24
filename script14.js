function* displayMessage() {

    console.log('start work')
    yield 'first stop'

    console.log('continue work')
    yield 'next stop'

    console.log('Done work')
    return 'Done Work...'
}

let msg = displayMessage()
console.log(msg.next())
console.log(msg.next())
console.log(msg.next())
