//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle

class car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }
    loadPassenger(num){
        if(this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxPassengers){
                this.passenger = num;
                return this.passenger;
            }else {
                console.log()
            }
        }else {
            console.log()
        }
    }
    start(){
        if(this.fuel > 0){
            console.log("the engine has started")
            return this.started === true
        }else {
            console.log("not enough fuel to start")
            return this.started === false
        }
    }
    scheduleService(mileage){
        if(mileage > 30000){
           this.scheduleService === true
            return this.scheduleService
        }
    }
}

//this shows how to call from this module...
let v = new car("Mercury", "Sedan", "2011", "black", 35000);
console.log(v)
