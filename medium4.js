// Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object;
// A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods 
// should affect the car’s mileage adding to it each time and console logging the old mileage and the new 
// mileage.

// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 
// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033
// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileagea: 26033 
// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileagea: 26063

var car = {
    make: "Nissan",
    model: "Altma",
    year: 2016,
    milage: 3000,
    color: "Grey",
    driveWork: 33,
    driveAround: 24000,
    driveErrands: 30,



    driveToWork() {
        console.log(`Old Milage:${this.milage} | New Milage: ${this.milage + this.driveWork}`);
    },

    driveAroundTheWorld() {
        console.log(`Old Milage:${this.milage + this.driveWork} | New Milage: ${this.milage + this.driveWork + this.driveAround}`);
    },

    runErrands() {
        console.log(`Old Milage:${this.milage + this.driveWork + this.driveAround} | New Milage: ${this.milage + this.driveWork + this.driveAround + this.driveErrands}`);
    }

};

car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();