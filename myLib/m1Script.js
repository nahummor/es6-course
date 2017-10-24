
const methods = module.exports = {};

methods.sub = function (x, y) {
    return x - y
}

methods.add = function (x, y) {
    return x + y
}

methods.showMessage = () => {
    return 'Hello From Module m1Script...'
}

