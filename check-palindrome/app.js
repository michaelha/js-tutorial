var arr = ['123','4213','131'];

String.prototype.reverse = function() {
  return this.split("").reverse().join("");
}

function isPalidrome( str ) {

  return ( str.reverse() === str )

}

arr.forEach(function(item) {

  console.log(isPalidrome(item));

});

console.log(isPalidrome(arr[1]));
