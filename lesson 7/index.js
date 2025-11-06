/* Написать функцию которая будет эмулировать игру в кубики, 
заданное количество игроков по очереди бросают кубик, 
каждый в итоге бросает одинаковое количество раз (должно работать с любым количеством раз заданным в переменной). 
У кого сумма набранная будет наибольшей - тот выиграл. 
Если суммы равны то ничья. Выведите результаты в консоль. */

// рандомное целое число на грани кубика
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min);
}

// игра
function game(playersCount, numberOfThrows) {
    let playersArray = []; // массив игроков

    // добавление игроков в массив
    for (let i = 1; i <= playersCount; i++) {
        playersArray.push(i);
    }

    let throwsArray = []; // массив кол-ва бросков

    // добавление кол-ва бросков в масив
    for (let i = 1; i <= numberOfThrows; i++) {
        throwsArray.push(i);
    }

    let resultArray = []; // результирующий массив
    let result = 0; // число выпавшее при броске кубика
    let sum = 0; // сумма баллов выпавших игроку
    let sumResultArray = []; // массив суммы баллов по каждому игроку

    // создание массива суммы баллов по каждому игроку
    for (let i = 0; i < playersArray.length; i++){
        for (let j = 0; j < throwsArray.length; j++) {
            result = getRandomInt(1, 7);
            resultArray.push(result);
            sum += resultArray[j]; 
        }
        sumResultArray.push(sum);
    }
    
    let maxValueFromArray = 0; // максимальное значение из массива суммы баллов по каждому игроку

    // поиск максимального числа в массиве
    for (let i = 0; i < sumResultArray.length; i++) {
        if (maxValueFromArray < sumResultArray[i]) {
            maxValueFromArray = sumResultArray[i];
        }
    }

    let countOfWinners = []; // количество победителей

    // подсчет победителей 
    for (let i = 0; i < sumResultArray.length; i++) {
        if (maxValueFromArray == sumResultArray[i]) {
            countOfWinners.push(i)
        } 
    }

    // результат игры
    if (countOfWinners.length == sumResultArray.length) {
        return "Ничья";
    } else {
        return `Количество победителей: ${countOfWinners.length}`;
    }
}

let j = game(20,2);
console.log(j);


/*Написать функцию которая будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. 
Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
Ваш код должен работать с любым числом заданным в переменной (не только с 15) и с любым количеством частей на которые надо разбить число.
    а. числа изначальное число целое, числа разбивки - целые (4,6,5)
    б. числа разбивки дробные с 2 знаками после запятой 4.55, 5.20, 5.25)*/

//a
function splitWithMinOne(number, countOfParts) {
    if (number < countOfParts) {
        throw new Error("Число должно быть >= количеству частей");
    }

    // распределение минимум по 1
    let remaining = number - countOfParts;

    // генерация разрезов
    let cuts = [0, remaining];
    
    for (let i = 0; i < countOfParts - 1; i++) {
        let x = getRandomInt(0, remaining + 1);
        cuts.push(x);
    }

    cuts.sort((a, b) => a - b);

    // части остатка
    let parts = [];
    for (let i = 1; i < cuts.length; i++) {
        parts.push(cuts[i] - cuts[i - 1]);
    }

    // добавление по 1 к каждой части
    return parts.map(p => p + 1);
}

//b
function getRandomDecimal(min, max) {
    return Math.random() * (max - min) + min;
}        

function getRandomIntInclusive(min, max) {
  // целое в [min, max], включая границы
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function splitWithMinOneDecimal(number, countOfParts, precision = 2) {
  const scale = Math.pow(10, precision);

  const total = Math.round(number * scale);   // всё в "копейках"
  const minPerPart = 1 * scale;               // минимум 1.00 -> 100 "копеек"

  if (total < countOfParts * minPerPart) {
    throw new Error("Число должно быть ≥ количеству частей (минимум 1.00 на часть).");
  }

  const remaining = total - countOfParts * minPerPart;

  // Разрезы в целых: от 0 до remaining
  const cuts = [0, remaining];
  for (let i = 0; i < countOfParts - 1; i++) {
    const x = getRandomIntInclusive(0, remaining); // строго в диапазоне
    cuts.push(x);
  }

  cuts.sort((a, b) => a - b);

  // Разности -> части остатка (целые)
  const remainderParts = [];
  for (let i = 1; i < cuts.length; i++) {
    remainderParts.push(cuts[i] - cuts[i - 1]);
  }

  // Добавляем минимум 1.00 к каждой
  const partsCents = remainderParts.map(p => p + minPerPart);

  // Преобразуем обратно в десятичные числа
  const parts = partsCents.map(p => p / scale);

  return parts;
}

let a = splitWithMinOne(20, 4);
console.log(a);

let b = splitWithMinOneDecimal(13, 4);
console.log(b);

/*Написать функцию которая подсчитывает количество Пятниц 13-ого с любой заданной даты в прошлом до сегодня. 
Ваш код должен иметь возможность считать количество дней на любую заданую в переменной первоначальную дату и считать верно через 10-15-20 лет
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )*/

function friday13 (startDate){
    let start = new Date(startDate);
    let today = new Date();

    start.setHours(0, 0, 0, 0); //обнуление времени, чтобы сравнивать только дату (без часов, минут и секунд)
    today.setHours(0, 0, 0, 0);

    let count = 0; // кол-во пятниц 13
    let current = new Date(start);
    
    while (current <= today) {
        let d = new Date(current.getFullYear(), current.getMonth(), 13);
        if (d >= start && d <= today && d.getDay() === 5) {
            count++;
        }
        current.setMonth(current.getMonth() + 1);
    }

    return count;
}

console.log(friday13("2020-01-01")); 