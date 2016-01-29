'use strict';

function buildFunctions() {
  var arr = [];

  for ( var i = 0; i < 3; i++ ) {
    let j = i;
    arr.push(
      function(){
        console.log(j);
      }
    )

  }
  return arr;
}

function buildFunctions2() {
  var arr = [];

  for ( var i = 0; i < 3; i++ ) {
    arr.push(
      // a seperate execution context for each i
      (function(j){
        return function() {
          console.log(j);
        }
      }(i))
    )

  }
  return arr;
}


var fs = buildFunctions();
var fs2 = buildFunctions2();



console.log(fs2);

fs2[0]();
fs2[1]();
fs2[2]();
