/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function checkDays(arr){// checkDays(arr,letter)
  for(let i=0;i<arr.length;i++){
    if (arr[i].startsWith('T'))//if (arr[i][0 === letter])
   { console.log(arr[i])
   }
  }
}
checkDays(daysOfWeek)//console.log(checkDays(daysOfWeek,"T"))