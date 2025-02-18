function getDivisorsCnt(n){
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0) {
            count++
            if (i !== n / i) {
                count++;
            }
        }
    }
    return count;
}
console.log(getDivisorsCnt(20))

function getDivisorsCnt(n){
    let count = 0;
    for (let i = 1; i <= n; i++){
        if(n % i === 0) {
            count++
        }
    }
    return count;
}
console.log(getDivisorsCnt(20))