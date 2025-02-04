function remainder(n, m) {
    if (m === 0 || n === 0) {
        console.log("Деление на ноль невозможно");
    }

    if (n > m) {
        return n % m;
    } else {
        return m % n;
    }
}
console.log(remainder(13, 5));