/*
  Создайте объект кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того
  хватает денег или нет, уведомляет покупателя о результате.
*/

/*
  Есть заранее известная база данных товаров, 
  в формате "имя-товара":"цена за одну единицу"
*/ 
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    pork: 80,
    cheese: 60,
    tea: 20,
    candy: 25
  };
  


  /* 
    Необходимо создать функцию-конструктор Cashier для объектов кассира,
    чтобы можно было создать сколько угодно кассиров.
    
    Поля объекта кассира: 
      - name - строка, имя, передается при вызове конструктора
      
      - products - объект база данных продуктов, передается при вызове конструктора
      
      - totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0 
      
      - customerMoney - число, сумма введенная пользователем в prompt при запросе денег, всегда начинается с 0 
      
      - changeAmount - число, сдача, всегда начинается с 0
      
      - countTotalPrice(order) - метод, получает список покупок, считает общую сумму исходя из поля products
        
      - getCustomerMoney() - метод, при вызове показывает prompt, в котором указана общая сумма покупок из поля totalPrice. 
          Ожидает ввода пользователя и записывает результат ввода в поле customerMoney. Проверить что результат ввода 
          пользователя не меньше чем значения поля totalPrice. Просит покупателя ввести сумму до тех пор, пока не будет 
          введена корректная сумма - равная или больше чем totalPrice. Если пользователь нажмет Cancel, 
          то функция возвращает null.
          
      - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
      
      - reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
      
      - serve(order) - метод, вызывается при обслуживании пользователя. Получает order - список покупок пользователя, 
          вызывает метод countTotalPrice для подсчета общей суммы, getCustomerMoney для запроса денег покупателя, 
          countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает 
          строку `Спасибо за покупку, ваша сдача ${сдача}`, при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
          Вызывает метод reset при любом исходе обслуживания.
  */
      // код
    // не забывайте о this при обращении к свойствам и методам будущего объекта
    
  function Cashier(
    name, 
    products,
    totalPrice = 0,
    customerMoney = 0,
    changeAmount = 0,
  ) {
      this.name = name;
      this.products = products;
      this.totalPrice = totalPrice;
      this.customerMoney = customerMoney;
      this.changeAmount = changeAmount;


      this.countTotalPrice = function(order){
        for (key in order) {
          const sumTotal = order[key] * this.products[key];
          this.totalPrice += sumTotal;
        }
        return this.totalPrice;
      };

        
      this.getCustomerMoney = function(){

        let userInput = 0;
        let num;
        let isValidInput;      
    do {
            userInput = prompt(`С вас ${this.totalPrice} !`, '');
            num = Number(userInput);
            if (userInput === null) {
                return;
            }
            this.customerMoney = num;
            isValidInput = userInput >= this.totalPrice && !Number.isNaN(userInput);

        } while (isValidInput === false);
        return this.customerMoney;
        };


      this.countChange = function(){
        if(this.customerMoney >= this.totalPrice) {  
        this.changeAmount = this.customerMoney - this.totalPrice;
      } else {
        this.changeAmount = null;
      }
        return this.changeAmount;
      };


      this.reset = function(){
        this.changeAmount = 0;
        this.customerMoney = 0;
        this.totalPrice = 0;
      };


      this.serve = function(order) {
        this.countTotalPrice(order);
        this.getCustomerMoney();
        this.countChange();
        if(this.changeAmount != null) {
          alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
        } else {
          alert('Очень жаль, что-то пошло не так, приходите еще');
        }
        this.reset();
      };
       };

  
  /*
    В метод serve будут передаваться объекты следующего формата. "имя-продукта": "количество-единиц"
  */
  const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };
  
  /*
    Ниже приведен пример использования.
  */
  
  const cashier = new Cashier('Mango', products);
  
  cashier.serve(order);
  /*
    При вызове cashier.serve, countTotalPrice посчитает общую сумму равную 20+30+20+60, итого 130
    Далее выполнение идет по вышеописанному алгоритму.
  */