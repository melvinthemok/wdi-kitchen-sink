var whatever
// a variable declared to test that kitchenSink works on undefined input

function woot () {
  console.log('Woot')
}
// a function declared to test that kitchenSink works on functions

function kitchenSink (input) {
  if (typeof input === 'string') {
    console.log(input)
  }
  else if (typeof input === 'number') {
    console.log(Math.pow(input, 2))
  }
  else if (typeof input === 'boolean') {
    if (input === true) {
      console.log('yes')
    } else {
      console.log('no')
    }
  } else if (typeof input === 'function') {
    input()
  } else if (typeof input === 'undefined') {
    console.log('Don\'t do that!')
  } else if (typeof input === 'object') {
    if (input === null) {
      console.log('null')
    } else if (Array.isArray(input) === true) {
      input.forEach(function (element) {
        // console.log(element)
        kitchenSink(element)
      })
    } else {
      for (var key in input) {
        if (input.hasOwnProperty(key)) {
          // console.log(input[key])
          kitchenSink(input[key])
        }
      }
    }
  }
}

kitchenSink([{1: 'a', 2: 'b', 3: 'c'}, 'hi', 24323, whatever, woot, null, [1, 2, 3, 4, 5], {'a': 1, 'b': 2, 'c': 3}])

// Zhao Long's code:
//
// function kitchenSinkReturn(dataType){
//   switch(typeof dataType){
//     case 'string':
//       return dataType;
//     case 'number':
//       return dataType*dataType;
//     case 'boolean':
//       return dataType ? 'yes' : 'no';
//     case 'function':
//       return dataType();
//     case 'undefined':
//       return `yo @$%@$%^ what's up with the horrbile input?`
//     case 'object':
//       if (Array.isArray(dataType)) {
//         dataType.map(function(value){
//           return kitchenSink(value);
//         })
//       } else if (dataType === null){
//           return `output is null`;
//       } else {
//         Object.keys(dataType).map(function(value2){
//           return kitchenSink(dataType[value2]);
//         })
//       }
//   }
// }
