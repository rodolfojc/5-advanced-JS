//FUNCTION CONSTRUCTOR

/*
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

*/

// OBJECT.CREATE

var personProto = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth);
    }
};


var rodolfo = Object.create(personProto);
rodolfo.name = 'Rodolfo';
rodolfo.yearOfBirth = 1987;
rodolfo.job = 'Hardware Operations';

var jane = Object.create(personProto, {
    
    name : {value: 'Jane'},
    yearOfBirth : {value: 1965},
    job : { value : 'Developer'}
    
});















