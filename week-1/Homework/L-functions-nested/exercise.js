var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function spellUpperCse(name){
    let mentorUpperCase = name.toUpperCase();
    return mentorUpperCase;
}
 
function greetMentors(name){
    console.log(`HELLO, ${spellUpperCse(name)}`);
}
greetMentors(mentor1);
greetMentors(mentor2);
greetMentors(mentor3);
greetMentors(mentor4);
greetMentors(mentor5);
