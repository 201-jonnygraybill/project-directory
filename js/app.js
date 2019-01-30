'use strict';

var dogs = prompt('How many dogs do I own');

console.log('Number of dogs, ', dogs);

//alert('Number of dogs, ' + dogs);

var guitars = prompt('How many guitars do you have?');

if (guitars === '0') {
    alert('No, I dont have any guitars');
}

if (guitars === '1') {
    alert('Yes, I have ' + guitars + ' guitar');
} 

if (guitars === '2' || guitars === '3') {
    alert('Yes I have ' + guitars + ' guitars');
}

console.log('Number of guitars, ', guitars);