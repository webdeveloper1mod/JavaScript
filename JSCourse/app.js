
// function a(){

//     function b(){
//         console.log(myVar);
//                 }


//     var myVar = 2;
//     b();
// }

// var myVar=1;  //global
// a();
 
//  dynamical programming lanuguage
// var a = 4 > 5
// console.log(a);

// a = 5

// console.log(a);

// var a = 2, b = 3, c = 4; 

// a = b = c;

// console.log(a)
// console.log(b)
// console.log(c)

// //Associcativity 

// var r = 1;
// var o = '3';
// var i = r + o;
// console.log(typeof r)
// console.log(typeof o);

// console.log(typeof i);


// var a = 0;
// var b = false;

// if(a == b) {
//     console.log('They are equal!');
// } else {
//     console.log('Nope, they are not equal')
// }


// var a;

//   a = 0;

// if(false || true){
//    console.log('Something is here');
// }  

// function greet(name){
//      name = name || "User"
//      console.log('Hello ' + name)

// }
// greet('Tony');
// greet();
// greet(0);


// var person = new Object();

// person.name = 'Ismail ';
// person.lastname = 'Uki';
// console.log(person)

// person["birthday"] = 'may';

// person.address = new Object();

// person.address.street = '111 Main St.';
// person.address.city = 'New York';
// person.address.state = 'NY';




// function greet(person){
//     console.log('Hi ' + person.name)
// }
// greet(person)

// greet({
//       name: 'Uki',
//       lastname: "Doe "
//     })


// var greet = 'Hello!';
// var greet = 'Hola';

// var englisch= {
//     greeting:{
//         basic: 'Hello'
//     }
// };
// var spanisch = {};

//  englisch.greeting ={}
//  englisch.greeting.greet = 'Hello';
//  spanisch.greet = 'Hola';
//  console.log(englisch.greet);

// console.log(englisch.greeting.greet)
// console.log(englisch)


// var car = {};
// car.name = 'newCars'
// car.marks = new Object();
// car.marks.first = "mercedes";
// console.log(car)
// car.marks.second = 'Audi';

// {
//     "firstname":"Mary",
//     "isAProgrammer": true
// }

// var objectLiteral = {
//     firstname: 'Mary',
//     isAProgrammer: true
// }

// '{"firstname":"Mary","isAProgrammer":true}'

// console.log(typeof JSON.stringify(objectLiteral))

//  var jsonValue = JSON.parse(
// '{ "firstname": "Mary", "isAProgrammer": true }');
// console.log(typeof jsonValue)


// function greet() {
//     console.log('hi')
// }

// greet.languge = 'englisch'
// console.log(typeof greet)
// greet();

// greet();

// function greet() {
//     console.log('hi');
// }

// var anonymusfucntion = function(){
//     console.log('hi')
// }

// anonymusfucntion();

// function log(a){
//     a();
// }

// log(function(){
//     console.log('hi');
// });


//function greet(firstanme, lastname, languge){
//     languge = languge || 'en'

//     if(arguments.length === 0){
//        console.log('Missing parameters!');
//        console.log('----------------');
//        return;
//     }

//     // console.log(firstanme);
//     // console.log(lastname);
//     // console.log(languge);
//     // //console.log(arguments)
//     // console.log('------------');
// }

// function greetEnglish(firstanme, lastname){
//     greet(firstanme,lastname,'en')
//     console.log('Hi ' + firstanme + ' ' + lastname);
// }

// function greetSpanish(firstanme, lastname){
//     greet(firstanme,lastname,'es')
//     console.log('Hola ' + firstanme + ' ' + lastname);
// }
// greetEnglish('John', 'Doe');
// greetSpanish('John', 'Doe');

// function getPerson() {

//     return {
//         firstanme: 'Tony'
//     }
// }

// console.log(getPerson())

// var firstanme = 'John';

// (function(name) {
//     var greeting = 'Inside IIFE: Hello';
//     console.log(greeting + ' ' + name)
// });


// (function(global, name){
     
//     var greeting = 'Hello';
//     global.greeting = 'Hello';
//     console.log(greeting + ' ' + name);
// }(window,'John'))
// console.log(greeting);


function greet(whattosay){
    return function(name){
        console.log(whattosay + ' ' + name);
    }
}

greet('Hi')('Tony')

var sayHi = greet('Hi');
sayHi("Majo")