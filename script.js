'use strict';

let userNumber;

const promptUserNumber = function () {
  let secretNumber = 17;
  let guess;
  let getUserNumber = () => {
    userNumber = prompt('Угадай число от 1 до 100');
    // отмена ввода числа
    if (userNumber === null) {
      alert('Игра окончена');
      return null;
    }

    if (userNumber.trim() === '' || !isFinite(userNumber)) {
      alert('Введи число!');
      return getUserNumber();
    }
    userNumber = Number(userNumber);
    return userNumber;
  };
  guess = getUserNumber();

  if (guess === null) {
    return;
  }

  if (guess > secretNumber) {
    alert('Загаданное число меньше');
    return promptUserNumber();
  } else if (guess < secretNumber) {
    alert('Загаданное число больше');
    return promptUserNumber();
  } else if (guess === secretNumber) {
    return alert('Поздравляю, Вы угадали!!!');
  }
};

promptUserNumber();
