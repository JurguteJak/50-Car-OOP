import { Car } from "./js/Car.js";

const volkswagen = new Car('Volkswagen', 'Beetle', 'white',);
console.log(volkswagen);

console.log(volkswagen.engineOn());
console.log(volkswagen.engineOn());
console.log(volkswagen.engineOn());

console.log(volkswagen.engineOff());
console.log(volkswagen.engineOff());
console.log(volkswagen.startDriving(2));
console.log(volkswagen.startDriving(1));
console.log(volkswagen.carStops());
console.log(volkswagen.fuelTankLeft(3));
console.log(volkswagen.fuelTankLeft(0));
console.log(volkswagen.fillTank());
