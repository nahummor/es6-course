class Car {
    constructor(color, whiles, brand) {
        this.color = color;
        this.whiles = whiles;
        this.brand = brand;
    }

    showCar() {
        console.log(this.brand, this.color, this.whiles);
    }

    set carColor(c) {
        this.color = c
    }
}

let myCar = new Car('white', 4, 'Ford')

myCar.showCar();
myCar.carColor = 'Blue'
myCar.showCar();