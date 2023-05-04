/* Задание 2. 
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который 
будет преобразовывать JSON в JS-объект и выводить его в консоль. */

let result = {
	list: []
};

const jsonString = `
    {
    "list": [
    {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
    },
    {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
    }
    ]
    }
    `;

const data = JSON.parse(jsonString);
const list = data.list;

let person = new Object();
list.forEach(function(elem) {
	person = elem;
    result.list.push(person);
	});
console.log(result);
/* Не уверена на счет правильности */

