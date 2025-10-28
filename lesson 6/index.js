//поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

let array = [1, 2, 3, 4, 5, 6];

let array2 = array.reverse();

console.log("Массив в обратном порядке: ", array2);

// найти максимальное значение числа в массиве ([3,67,15...])

let array3 = [3, 67, 15, 66, 23, 88, 1, 99, 73, 1000];
let maxValueFromArray = 0;

for (let i = 0; array3.length > i; i++) {
  if (maxValueFromArray < array3[i]) {
    maxValueFromArray = array3[i];
  }
}

console.log("Максимальное число в массиве: ", maxValueFromArray);

// записать в массив ряд фибоначчи начиная с N члена с длинной массива M

let array4 = [];
let M = Number(prompt("Введите длину массива:")); //10
let N = Number(prompt("Введите начальное значение для ряда фибоначчи:")); // 5

array4.push(0);
array4.push(1);
array4.push(N);

let newElement = 0;
let sum = 0;
let previousElementIndex = 0;

for (let i = 2; i < M; i++) {
    previousElementIndex = i-1;
    sum = array4[i] + array4[previousElementIndex];
    newElement = sum;
    array4.push(newElement);
}

console.log("Полученный ряд фибоначи: ", array4);

/* даны 2 4-х значных числа с неповторяющимися цифрами,
надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению,
но не по позиции (3487 и 3794 ---> 1 и 2 )
*/

let a = [3,4,8,7];
let b = [3,7,9,4];
let countByValueAndPosition = 0;
let countByValue = 0;

for (let i = 0; i < a.length; i++){
    if (a[i] === b[i]){
        countByValueAndPosition+=1;
    }
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            countByValue+=1;
        }
    }
}

console.log("Количество цифр, которые совпадают по значению и позиции: ", countByValueAndPosition);
console.log("Количество цифр, которые совпадают по значению: ", countByValue);

// сортировка по возрастанию
let array5 = [19,1000,99,432,77,5,6,1,800,10001];

array5.sort(function(a,b) {
    return a - b;
})

console.log("Отсортированный массив по возрастанию: ", array5);

// сортировка по убыванию
array5.sort(function(a,b) {
    return b - a;
})

console.log("Отсортированный массив по убыванию: ", array5);

// удалить из массива все повторяющиеся элементы

let array6 = [19,1000,99,99,19,10001,1000,432,77,5,6,1,800,10001]
let arrayNew = [];

for (let i = 0; i < array6.length; i++) {
    for (let j = 0; j < array6.length; j++) {
        if (i != j && array6[i] == array6[j]) {
            if (arrayNew.indexOf(array6[i]) == -1) {
                arrayNew.push(array6[i]);
            }
        }
    }
}

let result = array6.filter((element) => arrayNew.indexOf(element) == -1);

console.log("Результирующий массив без повторяющихся элементов: ", result);