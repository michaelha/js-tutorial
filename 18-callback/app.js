
var user = Model();
user.set('name', 'Alvin');
user.set('location', 'SF');

console.log('name is', user.get('name'));
console.log('location ', user.get('location'));

user.onChange('name', function(newValue) {
  console.log('name was changed to', newValue);
});

user.set('name', 'test');

function Model() {
  var obj = {};
  return {
    'set': function(key, value) {
      if ( typeof obj[key] === 'undefined' ) {
        obj[key] = value;
      } else {

        console.log('begin name change');

        obj[key] = value;

      }
    },
    'get': function(key) {
      return obj[key];
    },
    'onChange': function(key, callback) {
      //console.log(arguments);
      //callback();



    }
  };
}
