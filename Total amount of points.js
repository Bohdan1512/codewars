function points(games) {
    let totalPoints = 0;

    for (let game of games) {
        let [x, y] = game.split(':'); // Разделяем строку на два значения x и y

        if (x > y) {
            totalPoints += 3; // Победа
        } else if (x < y) {
            totalPoints += 0; // Проигрыш
        } else {
            totalPoints += 1; // Ничья
        }
    }

    return totalPoints;
}




