function hoopCount (n) {
    if(n >= 10){
        return "Great, now move on to tricks";
    } else if (n < 10){
        return "Keep at it until you get it"
    }
}
console.log(hoopCount(9));