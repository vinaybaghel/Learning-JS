const name = "Vinay"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('Vinay-yah-jod')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "    Vinay    "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vinay.com/vinay%20Baghel"
console.log(url.replace('%20','-'));

console.log(url.includes('vinay'))

console.log(gameName.split('-'))

