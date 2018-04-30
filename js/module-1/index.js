
let sharm = 15;
let hurgada = 25;
let taba = 6;

const userInput = prompt('Введите количество мест');
const  reqPlaces = Number(userInput);

const isValidInput = userInput > 0 && !Number.isNaN(userInput);
let tabaAgree;
let sharmAgree;
let hurgadaAgree;

if (isValidInput) {
    if (reqPlaces <= taba) {
        let tabaAgree = confirm('Есть место в группе Таба. Согласны ли Вы?');
        if (tabaAgree) {
            taba -= reqPlaces;
            alert('Приятного путешествия в группе Таба');
        } else {
            alert('Нам очень жаль, приходите еще!');
        }
    } else if (reqPlaces <= sharm) {
        let sharmAgree = confirm('Есть место в группе Шарм. Согласны ли Вы?');
        if (sharmAgree) {
            sharm -= reqPlaces;
            alert('Приятного путешествия в группе Шарм');
        } else {
            alert('Нам очень жаль, приходите еще!');
        }
    } else if (reqPlaces <= hurgada) {
        let hurgadaAgree = confirm('Есть место в группе Хургада. Согласны ли Вы?');
        if (hurgadaAgree) {
            hurgada -= reqPlaces;
            alert('Приятного путешествия в группе Хургада');
        } else {
            alert('Нам очень жаль, приходите еще!');
        }
    }  else {
        alert('Извините, мест нет!');
    }   
  } else {
     alert('Ошибка ввода');
  }

