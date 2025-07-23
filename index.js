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

    return result
}

console.log(Calculutae(2,3,"+"))