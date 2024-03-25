"use strict";
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar("toyoa", "corolla", { color: "red", year: "2009" });
console.log(mycar);
