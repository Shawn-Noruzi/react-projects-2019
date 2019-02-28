// car class for each car we're selling 
// car - make/model/vin
//getDescription 

class Person {
	constructor(name='anon', age = 0) {
		this.name = name;
		this.age = age;
	}
		getGreeting(){
			return `hi im ${this.name}`;
		}
		getDescription(){
			return `hi im ${this.name} and im ${this.age}`;
		}
}


class Student extends Person {
		constructor(name,age,major) {
		super(name,age);
		this.major = major;
	}
	hasMajor(){
		return !!this.major;
	}


	getDescription(){
		let description = super.getDescription();
		if (this.hasMajor()){
			description += ` Their major is ${this.major}`;
		}
		return description;
	}

}

class Traveler extends Person {

	constructor(name,age,homeLocation){
		super(name,age);
		this.homeLocation = homeLocation;
	}

	getGreeting(){
		let greeting = super.getGreeting();
		if (this.homeLocation){
			greeting += ` and i lives in ${this.homeLocation}`;
		}
		return greeting;
	}

}

const me = new Student('andrew',5);
console.log(me.getDescription());

const other = new Traveler('axxxdd',4,'c','location')
console.log(other.getGreeting());