function userName(name,type){
    name =  'Nimra'
    type = 'manager'
if (name.length>5 && name.length<10 && type === 'admin' || type === 'manager'){
        return "Username valid";
    }
    else {
        return "Username invalid"
    }
}
console.log(userName('Nimra'))