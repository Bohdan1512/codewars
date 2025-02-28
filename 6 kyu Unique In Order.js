    var uniqueInOrder=function(iterable){
        return Array.from(iterable).filter((el, i, arr) => el !== arr[i - 1]);
    }
    console.log(uniqueInOrder("AABBBCDDDH"))