let name = prompt('Как тебя зовут?');
let age = prompt('Какого ты года рождения?');

alert(name);
alert (2021 - age);
console.log(name, 2021 - age)

let a = prompt('Введите число');
let b = prompt('Введите число');
let c = prompt('Введите число');
alert (Number(a) + Number(c) + Number(b));
console.log(Number(a) + Number(c) + Number(b));

let d = Number(a) + Number(b) + Number(c);
console.log (d);
console.log (d / 3);

const number = Number(prompt("Введите пятизначное число"));

    const digit5=number%10;
    const digit4=(number%100 - digit5)/10;
    const digit3=(number%1000 - digit4*10 - digit5)/100;
    const digit2=(number%10000 - digit3*100 - digit4*10 - digit5)/1000;
    const digit1=(number - digit2*1000 - digit3*100 - digit4*10 - digit5)/10000;

    console.log(digit1,digit2,digit3,digit4,digit5);
