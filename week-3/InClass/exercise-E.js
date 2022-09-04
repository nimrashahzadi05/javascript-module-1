const currentYear = 2022
const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]


function age(birthYears){
    return currentYear - birthYears
}
function ageArray(array){
    return array.map(age)
}
console.log(ageArray(birthYears))