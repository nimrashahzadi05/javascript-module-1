
const currentYear = 2022
const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]


function age(birthYears){
    return currentYear - birthYears
}
/*
function ageArray(array){
    return array.map(age)
}
function getDrivers(array){
    return array.filter(e => age(e) >= 17) // returns a new array with only those elements that fit the condition. Written in arrow syntax
  }
  console.log(getDrivers(birthYears))
}
*/
function canYouDrive(birthYear) {
    const personAge = age(birthYear)
    if (personAge >= 17) {
        console.log(`Born in ${birthYear} can drive`)
    } else {
        console.log(`Born in ${birthYear} can drive in ${17 - personAge} years`)
    }
}
birthYears.map(canYouDrive)
const peopleCanDrive = birthYears.filter(year => age(year) > 17)
console.log(peopleCanDrive)