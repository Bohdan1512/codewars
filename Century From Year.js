function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

// Пример использования
const year = 2025;
console.log(`Год ${year} относится к ${centuryFromYear(year)} веку.`);