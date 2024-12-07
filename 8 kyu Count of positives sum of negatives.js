function countPositivesSumNegatives(input) {
    if(input.length === 0){
        return []
    }


    let positiveNumbers = 0;
    let sumOfNegativesNumbers = 0;

    for (let i = 0; i < input.length; i++) {

        if (input[i] > 0) {
            positiveNumbers = positiveNumbers + 1;
        } else {
            sumOfNegativesNumbers = sumOfNegativesNumbers + input[i];
        }
    }


    return [positiveNumbers, sumOfNegativesNumbers]

}

let input = [1, -7, 2, -3, 6, 3, 4, 5, 6, 7, 8, 9, -10, 11, -12, -13, 14, -15];
console.log(countPositivesSumNegatives(input))