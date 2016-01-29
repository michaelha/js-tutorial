// IIFE Example

var firstname = 'John';

(function(global, name){

  var greeting = 'Inside IFFE: Hello';
  global.greeting = 'Hello';
  console.log(greeting + ' ' + name);

})(window, firstname);

console.log(greeting);
