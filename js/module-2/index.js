
let userInput;
const numbers = [];
let total = 0;


 do {
  userInput = prompt(`Введите число`);
  num = Number(userInput);
  if (isNaN(userInput)){ 
      alert('Было введено не число, попробуйте еще раз');
} else { numbers.push(num);
}
  
} while (userInput !== null);


for (i=0; i<numbers.length; i++) {
    total = total + parseInt(numbers[i]);
}

alert(`Общая сумма чисел равна ${total}`);

