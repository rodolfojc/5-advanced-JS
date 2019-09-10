//FUNCTION CONSTRUCTOR

var rodolfo = {
    name: 'Rodolfo',
    yearOfBirth: 1987,
    job: 'Hardware Support'
};

// CAPITAL LETTER 'P'
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function(){
        console.log(2019 - this.yearOfBirth);
    }

Person.prototype.lastName = 'Carvajal';

var john = new Person('John', 1990, 'Teacher');
var cesar = new Person('Cesar', 1960, 'Driver');

john.calculateAge();
cesar.calculateAge();

console.log(john.lastName);
console.log(cesar.lastName);