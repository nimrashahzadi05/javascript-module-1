//array of names
const names = ["Lucia", "Nimra", "Hanna", "Danielle"]
//array of names from other class
const otherClass = ["Alejandro", "Alvaro", "Laila"]
//.concat() both arrays
const combinedNames = names.concat(otherClass)
console.log(combinedNames)
//.sort() final array
const sortCombinedNames = names.concat(otherClass).sort()
console.log(sortCombinedNames)

function chechingName(name , arrayOfNames){
    arrayOfNames = ["Lucia", "Nimra", "Hanna"]
    name = "yun"
    if (arrayOfNames.includes(name)){
        return `${name} is at class with ${arrayOfNames}`
    }
    else {
        return `${name} is not at class with ${arrayOfNames}`
    }
}
console.log(chechingName())


