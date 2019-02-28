/*
 * 
 * es6 arrow functions - always anonymous.
 * const name = (param x) => return x*x
 * 
 * 1.there's an implicit return 
 * 2.arguments object no longer bound
 * 3. 'this' is no longer bound
 * 
 * es5 vs es6
 * functions vs arrow functions
 * 
 * comes down to where you're able to use 'this' at. 
 * 
 * es6 removes need for const that = this;
 * 
 * inside objects just use functionName() {...arrow function ...stuff}
 * 
 */

const user = {
    name: 'Andrew',
    cities: ['London', 'Japan', 'Hong Kong'],
    placesLived() {
        return this.cities.map((cities) => this.name + ' has lived in ' + cities)
    }
};

console.log(user.placesLived());


const multiplier = {
    numbers: [3, 2, 1],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};
console.log(multiplier.multiply());

//conditional rendering 
/* 
function getLocation(location){
if (location){
return <p>user.location</p>

//given there's an object named user with a location keyvalue pair
{getlocation(user.location)} 
}
}
*/