'use strict';

var name = prompt('Hello! My name is Jonny. What is your name?');

console.log('User\'s name is ' + name);


var gamestart = confirm('Ok, ' + name + '. Ready to play a guessing game?');

if (gamestart === true) {
  alert('Awesome!');
} else {
  alert('Too bad.');
}
console.log('User confirmed ' + gamestart + ' for game start readiness');

var residence = prompt('Do I live in Seattle? (Yes or No)').toLowerCase();

// eslint-disable-next-line no-constant-condition
if (residence === 'yes' || residence === 'y') {
  alert('That\'s right! How did you know??');
} else {
  alert('I actually do live in Seattle');
}
console.log('User guessed ' + residence + ' to my question about living in Seattle');

var dreamLocation = prompt('Do you think I want to live in Seattle forever? (Yes or No)').toLowerCase();

if (dreamLocation === 'yes' || dreamLocation === 'y') {
  alert('Nope. I want to get some sunshine!');
} else {
  alert('You\'d be right! I need some sunshine!');
}
console.log('User answered ' + dreamLocation + ' to my question if I want to live in Seattle forever or not');

var age = prompt('Am I older than 30? (Yes or No)').toLowerCase();

if (age === 'yes' || age === 'y') {
  alert('Wrong! It just seems like that because of my chronic depression.');
} else {
  alert('Correct!');
}
console.log('User guessed ' + age + ' on if I\m over 30 or not');

var vehicle = prompt('Do I ride a motorcycle? (Yes or No)').toLowerCase();

if (vehicle === 'yes' || vehicle === 'y') {
  alert('That\'s right! I ride a Harley 883');
} else {
  alert('Stop getting my questions wrong. You seem like you don\'t even know me.');
}
console.log('User said ' + vehicle + ' to me riding a motorcycle');

var pets = prompt('Do you think I have any dogs? (Yes or No)').toLowerCase();

if (pets === 'yes' || pets === 'y') {
  alert('You\'re right! I have two dogs - a German Shepherd, and a Goldendoodle. But the Goldendoodle is super annoying, so I tell people that she belongs to my wife.');
} else {
  alert('I definitely have two dogs. They\'ve destroyed my back yard');
}
console.log('User said ' + pets + ' to if I have dogs or not');
