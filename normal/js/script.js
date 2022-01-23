let userName = prompt('What is your name?');
let messageElement = document.querySelector('.message');
if (userName) {
    messageElement.innerHTML = `Hello ${userName}`;
}
alert('Hello ' + userName);
console.log('Hello ' + userName + '.');

const YEAR_NOW = 2022;
let yearOfBirthday = prompt('In what year were you born?');

function calcAge() {
    return (YEAR_NOW - yearOfBirthday);
}
alert('You have ' + calcAge() + ' years old.');
let ageElement = document.querySelector('.age');
if (calcAge()) {
    ageElement.innerHTML = `You have ${calcAge()} years old.`;
}
console.log('You have ' + calcAge() + ' years old.');


let lengthSide = prompt('Are you want to know P of square, then say the length of the side of the square in cm.?');

function calcRadius() {
    return (lengthSide * 4);
}
alert('Perimetr of square is ' + (calcRadius()) + " cm.");
let perimetrElement = document.querySelector('.perimetr');
if (calcRadius()) {
    perimetrElement.innerHTML = `P of square is ${calcRadius()} cm.`;
}
console.log('P of square is ' + calcRadius() + ' cm.');