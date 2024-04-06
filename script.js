"use strict";
const playRound = () => {
    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    };
    const getNumber = () => Math.ceil(Math.random() * 100);
    let firstNumber = getNumber();
    const end = () => {
        alert("Game Over");
    }
    let walk = 10;
    const steps = () => {
        let secondNumber = +prompt("Угадай число от 1 до 100");
        if (secondNumber === 0) {
            end();
        } else {
            if (walk === 1 && firstNumber !== secondNumber) {
                let choice = confirm("Опять мимо...Попытки закончились, хотите сыграть еще?");
                if (choice) {
                    firstNumber = getNumber();
                    console.log(firstNumber);
                    walk = 10;
                    steps();
                } else {
                    end();
                }
            } else {
                if (!isNumber(secondNumber)) {
                    alert("Введи число!");
                    steps();
                } else if (secondNumber === null) {
                    end();
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
                        end();
                    }
                } else if (firstNumber < secondNumber) {
                    walk--;
                    alert("Загаданное число меньше осталось " + walk + " попыток ");
                    steps();
                } else if (firstNumber > secondNumber) {
                    walk--;
                    alert("Загаданное число больше осталось " + walk + " попыток ");
                    steps();
                }
            }
        }
    };
    steps();
};
playRound();
