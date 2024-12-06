'use strict';

// Задание 1

a = +prompt('цена');
b = +prompt('скоко денег');

if (a=b){
    alert('Покупка совершена')
} if(a>b){
    s = a-b;
    alert(`Для покупки не хватает ${s}р.`)
} if(a>b){
    s = b-a;
    alert(`Покупка совершена. Сдача ${s} р.`)}

//  задание 2

a = +prompt('Введите число');

if (a>0){
    alert('1')
} if(a=0){
    alert(`0`)
} if(a<0){
    alert(`-1`)}


let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';	
}

a+b < 4 ? 'Мало' : 'Много'

//задание 4

let message;
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
}

login == 'Сотрудник'? 'Привет': 'Нет логина'
login == 'Директор'? 'Привет': 'Нет логина'