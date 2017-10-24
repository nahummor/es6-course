// my new module v1.0 24-10-2017
//===============================

const methods = module.exports = {};

methods.sub = function (x, y) {
    return x - y
}

methods.add = function (x, y) {
    return x + y
}

methods.getRandomNumber = () => {
    return Math.round(Math.random() * 10)
}

methods.showMessage = () => {
    return 'Hello From Module m1Script...'
}

