let radius = prompt("Enter the radius of your circle in cm.");

function calcArea(radius) {
    return Math.floor((Math.pow(radius, 2) * Math.PI));
}
alert('Area of a circle is ' + calcArea(radius));
let areaElement = document.querySelector('.area');
if (radius) {
    areaElement.innerHTML = `Area of a circle is ${calcArea(radius)}`;
}
console.log('Area of a circle is ' + calcArea(radius));


let distance = prompt("What is the distance between the cities (in kilometers)?");
let time = prompt("How long (in hours) you want to be at your destination?");

function calcSpeed() {
    return (distance / time);
}
alert('You speed must be ' + calcSpeed() + ' kilometers in hour (if you want to be at time)');
let speedElement = document.querySelector('.speed');
if (calcSpeed()) {
    speedElement.innerHTML = `You speed must be ${calcSpeed()} kilometers in hour (if you want to be at time)`;
}
console.log('You speed must be ' + calcSpeed() + ' kilometers in hour (if you want to be at time)');

const EURO = 1.13;
let dollar = prompt("Convert your dollars in euro.");

function calcConvert() {
    return (Math.floor(dollar / EURO));
}
alert('From ' + dollar + ' dollars you have ' + calcConvert() + ' euro.');
let convertElement = document.querySelector('.convert');
if (calcConvert()) {
    convertElement.innerHTML = `From ${dollar} dollars you have ${calcConvert()} euro.`;
}
console.log('From ' + dollar + ' dollars you have ' + calcConvert() + ' euro.');