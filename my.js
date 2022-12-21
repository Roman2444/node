const getRandom = require('./app');
const oneLinerJoke = require('one-liner-joke');
const fs = require('fs');

// console.log('hello my.js');

// // console.log(getRandom);
// getRandom();

// const getRandomJoke = oneLinerJoke.getRandomJokeWithTag('stupid').body;
// console.log(getRandomJoke);

const numb = process.argv[2];

const getTwoOne = (numb) => {
    return 2/numb
}

console.log('SOLUTION ', getTwoOne(numb));

const myText = fs.readFileSync('./files/text.txt', 'utf8');
fs.appendFileSync('./files/text.txt', '  ...это текст дополнительный...');

console.log(myText)

