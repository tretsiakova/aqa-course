/* Решить используя промисы и async/await. 
Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. 
Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.*/

// случайная задержка от 1 до 5 секунд
function randomDelay() {
  return Math.floor(Math.random() * 5000) + 1000;
}

// три промиса с разным результатом
const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve(1), randomDelay());
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), randomDelay());
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), randomDelay());
});

// Promise.race ждёт самый быстрый промис
Promise.race([promise1, promise2, promise3])
  .then((result) => console.log("Первым сработал промис: ", result));

/*Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
Создайте async функцию, которая с помощью await будет дожидаться результата getNum, 
затем возводить его в квадрат и выводить на экран.*/

function getNum() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 5) + 1; // 1-5
      console.log("Случайное число:", num);
      resolve(num);
    }, 3000);
  });
}

async function square() {
  const num = await getNum(); // ждём результат
  const square = Math.pow(num, 2); // возведение в квадрат
  console.log("Квадрат числа:", square);
}

square();

/*Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
Используйте также функцию getNum, чтобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
Создайте async функцию, которая с помощью await будет дожидаться результата функции,
затем будет дожидаться результата второй функции, а затем найдет сумму полученных чисел и выводит на экран.*/

function getNum1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 5) + 1; // 1-5
      console.log("Первое число:", num);
      resolve(num);
    }, 3000);
  });
}

function getNum2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 5) + 6; // 6-10
      console.log("Второе число:", num);
      resolve(num);
    }, 5000);
  });
}

async function sum() {
  const num1 = await getNum1(); // ждём первое число
  const num2 = await getNum2(); // ждём второе
  let sum = num1 + num2;
  console.log("Сумма чисел: ", sum);
}

sum();


