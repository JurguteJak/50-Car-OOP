export class Car {
    constructor(pavadinimas, modelis, spalva) {
        this.brand = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTank = 55;
        this.fuelConsumptionPer100 = 10;
        this.isEngineOn = false;
        this.speed = 0;
        this.currentFuel = 55;
    }

    engineOn() {
        if (this.isEngineOn) {
            return `ijungto varyklio dar karto ijungti negalima, sugadinsi starteri`;
        }
        this.isEngineOn = true;
        return `variklis ijungtas.`;
    }

    engineOff() {
        if (!this.isEngineOn) {
            return `isjungto varyklio isjungti negalima...`;
        }
        this.isEngineOn = false;
        return `variklis isjungtas.`;
    }

    startDriving(count) {
        this.speed++;
        return `automobilis pradeda vaziuoti ir sunaudoja ${count * (this.fuelConsumptionPer100 / 10)} litrus kuro sanaudu`;
    }

    carStops() {
        if (!this.isEngineOn || this.speed === 0) {
            return `automobilis sustoja`;
        }
    }

    fuelTankLeft(use) {
        if (this.currentFuel >= use) {
            this.currentFuel -= use;
            return `kuro liko: ${this.currentFuel} litrai`;
        }
    }

    fillTank() {
        if (this.currentFuel < this.fuelTank) {
            const neededFuel = this.fuelTank - this.currentFuel;
            return `uzpilk kuro ${neededFuel} litrus`;
        }
        return `nereikia uzpilti kuro`;
    }
}
