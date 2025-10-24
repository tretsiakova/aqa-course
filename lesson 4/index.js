//Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
let a = "Test";
let b = true;
let c = 2;

let sum = a + b; //string+boolean
console.log(sum);

let sum1 = a + c; //string+number
console.log(sum1);

let sum2 = c + b; //number+boolean
console.log(sum2);

// Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
let d = "2";
let i = true;
let f = 2;

let multiplication = d * i; //string * boolean
console.log(multiplication);

let multiplication1 = d * f; //string * number
console.log(multiplication1);

let multiplication2 = f * i; //number * boolean
console.log(multiplication2);

// Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
let g = "10";
let k = true;
let l = 2;

let divide = g / k; //string/boolean
console.log(divide);

let divide1 = g / l; //string/number
console.log(divide1);

let divide2 = l / k; //number/boolean
console.log(divide2);

// Выполнить явное преобразование(number, string, boolean)
g = Number(g);
k = Number(k);
l = Number(l);

console.log(typeof(g), typeof(k), typeof(l));

g = String(g);
k = String(k);
l = String(l);

console.log(typeof(g), typeof(k), typeof(l));

g = Boolean(g);
k = Boolean(k);
l = Boolean(l);

console.log(typeof(g), typeof(k), typeof(l));
