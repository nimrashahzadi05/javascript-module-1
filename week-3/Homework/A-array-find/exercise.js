/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

//new function
function findLongNameThatStartsWithA(name){
  return name.length>7
}// name.find(el => el[0] ==="A" && el.length > 7)also use arrow method
//or return name[0] == "A" && name.length > 7
var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA)

console.log(longNameThatStartsWithA);


/* EXPECTED OUTPUT */
// "Alexandra"
 