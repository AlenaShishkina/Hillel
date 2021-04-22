const num1 = +prompt('Введите число');
const num2 = +prompt('Введите число');

if (num1 > num2) {
    alert (num1 + " " + "больше чем" + " " + num2);
} else if ( num1 < num2) {
    alert (num2 + " " + "больше чем" + " " + num1);
} else {
    alert ("числа равны");
}

const numN = + prompt("введите числдо") % 10;
if (numN % 2 === 1) {
    alert("число заканчиваеться на" + " " + numN + " " + "не четное");
} else {
    alert("число заканрчиваеться на" + " " + numN + " " + "четное");
} 
alert(numN % 10);

const userName = prompt("Привет, как тебя зовут?");
const age = 2021 - +prompt("Ведите год вашего рожения");
const answer = confirm("Алкоголь употребляешь?");

if (answer && age > 40) {
    console.log(userName + ", Не злоупотребляйте");
} else if (answer  && age < 18) {
    console.log(userName + ", Ты что?! Маме расскажу!");
} else if (answer && age > 18 && age < 40) {
    console.log(userName + ", Только водку с пивом не мешай..");
} else {
    console.log(userName + ", Так держать!");
}
