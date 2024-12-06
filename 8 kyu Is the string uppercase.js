function myFunc(myString) {

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] !== myString[i].toUpperCase()) {
            return false
        }
    }
    return true
}