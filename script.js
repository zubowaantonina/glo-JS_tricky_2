"use strict";
const playRound = () => {
    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };
    const getNumber = () => Math.ceil(Math.random() * 100);
    let firstNumber = getNumber();
    console.log(firstNumber);
    let walk = 10;
    const steps = () => {
        let secondNumber = +prompt("Угадай число от 1 до 100");
        if (secondNumber === 0) {
            alert("Пока!");
        } else {
            if (walk === 1 && firstNumber !== secondNumber) {
                let choice = confirm("Попытки закончились, хотите сыграть еще?");
                if (choice) {
                    firstNumber = getNumber();
                    console.log(firstNumber);
                    walk = 10;
                    steps();
                } else {
                    alert("Пока!");
                }
            } else {
                if (!isNumber(secondNumber)) {
                    alert("Введи число!");
                    steps();
                } else if (secondNumber === null) {
                    alert("Игра окончена");
                } else if (firstNumber === secondNumber) {
                    let result = confirm(
                        '"Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'
                    );

                    if (result) {
                        firstNumber = getNumber();
                        console.log(firstNumber);
                        walk = 10;
                        steps();
                    } else {
                        alert("Пока!");
                    }
                } else if (firstNumber < secondNumber) {
                    alert("Загаданное число меньше");
                    walk--;
                    steps();
                } else if (firstNumber > secondNumber) {
                    alert("Загаданное число больше");
                    walk--;
                    steps();
                }
            }
        }
    };
    steps();
};
playRound();
