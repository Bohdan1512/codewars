function countSheeps(sheep) {
        return sheep.filter(i => i === true).length
}
console.log(countSheeps(['true','true','false','true','false','true','true','false','false','false','true']));