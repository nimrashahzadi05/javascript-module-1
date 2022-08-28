const name = "Daniel";
let nameLength = name.length;

console.log(nameLength);

function sentence(){
    return  ` My name is Daniel and my name is ${nameLength} characters long. `
}
let length = sentence()
console.log(length)