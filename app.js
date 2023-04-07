const fs = require('fs');

const genders = [
  'male',
  'female'
];
const maleNames = [
  'John',
  'David',
  'James',
  'George',
  'Henry'
];
const femaleNames  = [
  'Emma',
  'Anna',
  'Juliet',
  'Alice',
  'Elizabeth'
];
const lastNames = [
  'Smith',
  'Wiliams',
  'Johnson',
  'Miller',
  'Jones'
];

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randEmail(firstName, lastName) {
  const domain = 'gmail.com';
  const username =`${firstName}.${lastName}`;
  return `${username}@${domain}`;
}

const people = [];

for(let x = 1; x < 21; x++) {
  const gender = randChoice(genders);
  const firstName = gender ==='male' ? 
    randChoice(maleNames) :
    randChoice(femaleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * 60) + 18;
  const email = randEmail(firstName, lastName);

  const person = { gender, firstName, lastName, age, email };
  people.push(person);
}

const jsonData = JSON.stringify(people, null, 2);

fs.writeFile('people.json', jsonData, err => {
  if (err) {
    console.error('Something went wrong');
  } else {
    console.log('File has been successfully generated! Check people.json');
  }
});
