function validatePIN (pin) {
    if(pin.length === 4 || pin.length === 6){
        if(pin.split("").every(char => char >= '0' && char <= '9')){
            return true
        }
    } return false
}
console.log(validatePIN("2345"))