var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }

}

var logName = function(lang1, lang2) {

  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' +lang2);
  console.log('------');
}
// bind didnt execute function; just a copy
var logPersonName = logName.bind(person);

logPersonName('en');

// call - execute the function immediately
logName.call(person, 'en', 'es');

// apply - requires an array for the 2nd element
logName.apply(person, ['en', 'es']);

// immediately invote the function

(function(lang1, lang2) {

  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' +lang2);
  console.log('------');
}).apply(person, ['en', 'es']);


// function borrowing

var person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
}

person.getFullName.apply(person2);

// function currying

function multiply(a, b) {
  return a*b;
}

var multipleByTwo = multiply.bind(this, 2);

console.log( multipleByTwo(4) ) ;
