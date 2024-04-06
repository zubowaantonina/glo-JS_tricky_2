"use strict";
const playRound = () => {
    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };
    const getNumber = () => Math.ceil(Math.random() * 100);//случайное число от 1 до 100
    let firstNumber = getNumber()
    console.log(firstNumber);
    const steps = () => {
        let secondNumber = +prompt("Угадай число от 1 до 100")
        if (!isNumber(secondNumber)) {
            alert('Введи число!')
            steps();
        } else if (secondNumber === 0) {
            alert('Игра окончена')
        } else if (firstNumber === secondNumber) {
            alert('Поздравляю, Вы угадали!!!')
        } else if (firstNumber < secondNumber) {
            alert('Загаданное число меньше')
            steps();
        } else if (firstNumber > secondNumber) {
            alert('Загаданное число больше')
            steps();
        }
    }
    steps()
}
playRound();