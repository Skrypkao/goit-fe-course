
let userInput;
const numbers = [];
let total = 0;

 do {
  userInput = prompt(`Введите число`);
  const num = Number(userInput);
  if (isNaN(userInput)){ 
      alert('Было введено не число, попробуйте еще раз');
} else if (userInput !== null) { numbers.push(num);
};
  
}
 while (userInput !== null);
console.log(numbers);

for (value of numbers) {
    total = total + parseInt(value);
}

alert(`Общая сумма чисел равна ${total}`);


