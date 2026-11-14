'use strict';

let userNumber;

const promptUserNumber = function (attempts = 10) {
  let secretNumber = 17;
  let guess;

  let getUserNumber = function () {
    userNumber = prompt('Угадай число от 1 до 100');

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

  if (guess === secretNumber) {
    let userChoice = confirm(
      'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?',
    );
    if (userChoice === true) {
      return promptUserNumber();
    } else {
      alert('Игра окончена');
      return;
    }
  }

  attempts--;

  if (guess > secretNumber) {
    alert(`Загаданное число меньше, осталось попыток ${attempts}`);
  } else {
    alert(`Загаданное число больше, осталось попыток ${attempts}`);
  }

  if (attempts > 0) {
    return promptUserNumber(attempts);
  } else {
    let finishChois = confirm('Попытки закончились. Хотите сыграть еще?');
    if (finishChois === true) {
      return promptUserNumber();
    } else {
      alert('Игра окончена');
      return;
    }
  }
};

promptUserNumber();
