// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multipliedNumbers(numbers){
    return numbers * 100
}

var result = numbers.map((numbers) => numbers * 100)

//const multipliedNumbers = numbers.map(number * 100)<===another method

console.log(result)