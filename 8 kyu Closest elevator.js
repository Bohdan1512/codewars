function elevator(left, right, call) {
    // Рассчитать расстояние от каждого лифта до вызываемого этажа
    const leftDistance = Math.abs(call - left);
    const rightDistance = Math.abs(call - right);

    // Сравнить расстояния и выбрать ближний лифт
    if (leftDistance < rightDistance) {
        return "left"; // Левый лифт ближе
    } else if (rightDistance < leftDistance) {
        return "right"; // Правый лифт ближе
    } else {
        // Если расстояние одинаковое, выбрать правый лифт
        return "right";
    }
}

console.log(elevator(0, 1, 0)); // "left"
console.log(elevator(0, 1, 1)); // "right"
console.log(elevator(0, 1, 2)); // "right"
console.log(elevator(0, 0, 0)); // "right"
console.log(elevator(0, 2, 1)); // "right"