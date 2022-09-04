const currentYear = 2022
const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]


function age(birthYears){
    return currentYear - birthYears
}
function ageArray(array){
    return array.map(age)
}
console.log(ageArray(birthYears))


function whenCanIDrive(birthYear){
    const personAge = age(birthYear)
    if (age >= 17){
      console.log(`Born in ${birthYear} can drive`)
  
    }else{
      console.log(`Born in ${birthYear} can drive in ${17 - personAge} years`)
    }
  
  }
  birthYears.forEach(whenCanIDrive)