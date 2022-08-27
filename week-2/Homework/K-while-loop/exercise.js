/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

let n = 3;

function sumTillNum(num){
	let i=0
	let total=0
	while(i<=num){
		total +=i // total = total + i
		i++
		//your code here
}
return total;}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
