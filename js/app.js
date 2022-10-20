'use stict';
let userName = prompt('What is your name?');
console.log (userName);

alert(' Greetings' + userName);
let answer1 = prompt (' Does Paula enjoy nature? yes or no.');
answer1 = answer1.toLowerCase();
if (answer1 === 'yes'|| answer1 === 'y') {
  //console.log('You got it dude!');
  alert('Heck yes, I love that you know that about me!');
} else if (answer1 === 'no'|| answer1 === 'n') {
  //console.log('Good guess, but that is heckin false. She be loving the nature.' );
  alert('Good guess, but that is heckin false. She be loving the nature.');
} else {
  //console.log('Well that is just invalid.');
  alert('Participate with a yes or no, it is fun.');
}

let answer2 = prompt('Is her favorite food fish? y/n');
answer2 = answer2.toLowerCase();
if (answer2 === 'yes'|| answer2 === 'y') {
  //console.log('Incorrect');
  alert('Absolutely not, I dont hate it but I heckin never really crave it');
} else if (answer2 === 'no'|| answer2 === 'n') { 
  //console.log(' Correcto Mundo ');
  alert ('You know Paula well, wowzers!');
} else {
  //console.log('Why they no participate?');
  alert('Please try a yes or a no to get special message.');
}

let answer3 = prompt ('Was she born in Costa Rica? y/n');
answer3 = answer3.toLowerCase();
if (answer3 === 'yes'|| answer3 === 'y'){
  //console.log('Correct');
  alert('You are incredible and correct! Great Job.');
} else if (answer3 === 'no'|| answer3 === 'n'){
  //console.log('Incorrecto!');
  alert('That is incorrect and you are rad for guessing!');
}else {
  //console.log('typing weird stuff I see');
  alert('Guessing y/n will unlock other neat messages');
}

let answer4 = prompt ('Does Paula spend time in saunas?');
answer4 = answer4.toLowerCase();
if (answer4 === 'yes'|| answer4 === 'y'){
  //console.log('Typed yes');
  alert(' You are on to her, Three times a week, my friend.');
} else if (answer4 === 'no'|| answer4 === 'n'){
  //console.log('Is wrong for that.lol');
  alert('If no meant yes you would be right but you are wrong and that is fine.');
} else {
  //console.log('whyyyyy no play?');
  alert('yes or a no is the way to go!');
}

let answer5 = prompt ('Can she pick the best pineapple of all the grocery lands?');
answer5 = answer5.toLowerCase();
if (answer5 === 'yes'|| answer5 === 'y'){
  //console.log('They agree');
  alert('Absolutely' + userName + 'and with confidence. You ARE correct and awesome!' + userName);
} else if (answer5 === 'no'|| answer5 ==='n'){
  //console.log('said no');
  alert( userName + 'That is not right, she picks those pineapples nicely. You are kind for playing regardless of being wrong. lol ');
} else {
  //console.log(' invalid response.');
  alert('Bold statement'+ userName + 'but a y/n will get us where we need to go.');
}
