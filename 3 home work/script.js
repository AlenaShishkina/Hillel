console.log("Вывести на страницу в одну строку через запятую числа от 10 до 20")
let text = "";
for (let i = 10; i <= 20; i++) {
    text += i + ", ";
}
console.log(text);

console.log("Вывести квадраты чисел в одну строку через запятую числа от 10 до 20")
let number = "";
for (let b = 10; b <= 20; b++)
	console.log (b * b);

console.log("Вывести таблицу умножения на 7")
for (let i = 1; i <= 10; i++) {
    console.log("7 * " + i + " = " + i * 7);
}

console.log("Найти сумму всех целых чисел от 1 до 15")
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);

console.log("Найти произведение всех целых чисел от 15 до 35")
let product = 15;
for (let i = 16; i <= 35; i++) {
    product = product * i;
}
console.log(product);

console.log("Найти среднее арифметическое всех целых чисел от 1 до 500")
let sum2 = 0;
for (let i = 1; i <= 500; i++) {
    sum2 += i;
}
console.log(sum2 / 500);

