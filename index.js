function Calculutae(x,y,z){
    let result
    if(z == "*"){
        result = parseFloat(x) * parseFloat(y)
    }else if(z == "/"){
        result = parseFloat(x) / parseFloat(y)
    }else if(z == "+"){
        result = parseFloat(x) + parseFloat(y)
    }else if(z == "-"){
        result = parseFloat(x) - parseFloat(y)

        // coment here
    }else{
        result = "Invalid "
    }

    return result
}
function Calculutae(x,y,z){
    let result
    if(z == "*"){
        result = parseFloat(x) * parseFloat(y)
    }else if(z == "/"){
        result = parseFloat(x) / parseFloat(y)
    }else if(z == "+"){
        result = parseFloat(x) + parseFloat(y)
    }else if(z == "-"){
        result = parseFloat(x) - parseFloat(y)
    }else{
        result = "Invalid Operator"
    }

    console.log("No Change were made");

    return result
}

console.log(Calculutae(2,3,"+"))