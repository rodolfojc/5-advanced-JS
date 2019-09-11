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

/*
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

*/

/*
////////////////////////////////////////////////////
// PRIMITIVE VS OBJECTS

// PRIMITIVE HOLD THE DATA
// IT IS A REFERENCE THAT POINT THE LOCATION IN MEMORY

//PRIMITIVE
var a = 29;
var b = a;

a = 46;

console.log(a);
console.log(b);

//OBJECT
var obj1 = {
    name : 'Rodolfo',
    age : 31
};

var obj2 = obj1;

obj1.age = 45;

console.log(obj1.age);
console.log(obj2.age);

// FUNCTION

var age = 27;
var obj = {
    name : 'Jonas',
    city : 'Lisbon'
};

function change(a, b){
    a = 38;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);

*/

/*
///////////////////////////////////////
// PASSING FUNCTIONS AS ARGUMENTS 
// FIRT-CLASS FUNCTIONS 

var years = [1990, 1987, 2000, 1999];

// GENERIC FUNCTION
function arrayCalc(arr, fn) {
    
    var arrResult = [];
    
    for (var i = 0; i <  arr.length; i++ ) {
        arrResult.push(fn(arr[i])); // CALLBACK FUNCTION
    }
    
    return arrResult;
}

// CALLBACK FUNCTIONS

function calculateAge (el) {
    return 2019 - el;    
}

function isFullAge (el){
    return el >= 18;
}

function maxHeartRate (el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}

// TESTING 
var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

*/

/*
/////////////////////////////////////////////////////
// FUNCTIONS RETUNING FUNCTIONS

function interviewQuestion(job){
    
    if(job === 'Driver') {
        return function(name){
            console.log(name + ', can you please explain what is this sign?');
        }
    } else if(job === 'Developer'){
        return function (name) {
            console.log(name + ', do you know OOP - Object Oriented Programming')
        }
    } else {
        return function(name){
            console.log(name + ', then... what do you do???')
        }
    }
    
}



// RETURNING A FUNCTION IN A VARIABLE
var driverQuestion = interviewQuestion('Developer');
driverQuestion('Rodolfo');

// NOT NECCESSARY TO SAVE THE FUNCTION - OTHER WAY
interviewQuestion('Developer')('Rodolfo');

*/

/////////////////////////////////////////////////////
// FUNCTIONS: IIFE - INMEDIATELY INVOKED FUNCTIONS

// SCOPING CHAIN ONLY WORKS THE OTHER WAY AROUND 

/*
function game(){
    var score = Math.random()*10;
    console.log(score >= 5);
}
game();

*/

/*
(function(){
    var score = Math.random()*10;
    console.log(score >= 5);
 })();

(function(goodLuck){
    var score = Math.random()*10;
    console.log(score >= 5 - goodLuck);
 })(5);

*/

///////////////////////////////////////////////////////////
// CLOSURES

/*
function retirement(retireAge){
    var a = ' years left until retirement';
    return function(yearOfBirth){        
        var age = 2019 - yearOfBirth;
        console.log((retireAge - age) + a);
    }
}

var retirementUSA = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUSA(1987);
retirementGermany(1987);
retirementIceland(1987);
*/

//retirement(66)(1990);

/*
function interviewQuestion(job){
    
    if(job === 'Driver') {
        return function(name){
            console.log(name + ', can you please explain what is this sign?');
        }
    } else if(job === 'Developer'){
        return function (name) {
            console.log(name + ', do you know OOP - Object Oriented Programming')
        }
    } else {
        return function(name){
            console.log(name + ', then... what do you do???')
        }
    }
    
}

*/

/*
function interviewQuestions(job){
    driver = ', do you have a licence?';
    developer = ', do you know Java?';
    other = ', do you like classic music?';
    return function(name){
        if (job === 'Driver'){
            console.log(name + driver);
        } else if (job === 'Developer'){
            console.log(name + developer);
        } else {
            console.log(name + other);
        }
    }
}

var iAmdriver = interviewQuestions('Driver');
iAmdriver('Karla');

interviewQuestions('Developer')('Rodolfo');

*/

/////////////////////////////////////////////////////////////////
// BIN, CALL AND APPLY

var rodolfo = {
    name : 'Rodolfo',
    age : 31,
    job : 'Developer',
    presentation : function(style, timeOfDay) {
        if (style === 'Formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen, I\'m '+ this.name + ', a ' + this.job);
        } else if (style === 'Friendly') {
            console.log('Good ' + timeOfDay + ', what\'s up?,  I\'m '+ this.name + ', a ' + this.job );                   
        }
    }
    
}

rodolfo.presentation('Formal', 'Morning');

var karla = {
    name : 'Karla',
    age : 34,
    job : 'Designer'
}

rodolfo.presentation.call(karla, 'Friendly', 'afternnon');

//rodolfo.presentation.apply(karla, ['Friendly', 'afternnon']);

var rodolfoFriendly = rodolfo.presentation.bind(rodolfo, 'Friendly');
rodolfoFriendly('evening');

var karlaFormal = rodolfo.presentation.bind(karla, 'Formal');
karlaFormal('night');


var years = [1990, 1987, 2000, 1999];

function arrayCalc(arr, fn) {
    
    var arrResult = [];
    
    for (var i = 0; i <  arr.length; i++ ) {
        arrResult.push(fn(arr[i])); // CALLBACK FUNCTION
    }
    
    return arrResult;
}

// CALLBACK FUNCTIONS

function calculateAge (el) {
    return 2019 - el;    
}

function isFullAge (limit, el){
    return el >= limit;
}

var age = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(age, isFullAge.bind(this, 20));

console.log(age);
console.log(fullJapan);

































