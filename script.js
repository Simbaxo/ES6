// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith'
var age5 = 23
name5 = 'Jane Miller'
console.log(name5)

// ES6
const name6 = 'Jane Smith'
let age6 = 23
name6 = 'Jane Miller'
console.log(name6)
*/

// ES5
function driversLicense5(passedTest) {

  if (passedTest) {
    var firstName = 'John'
    var yearOfBirth = 1990
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.')
}

driversLicense5(true)

// ES6
function driversLicense6(passedTest) {

  let firstName
  const yearOfBirth = 1990

  if (passedTest) {
    firstName = 'John'
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.')
}

driversLicense6(true)

let i = 23

for (let i = 0; i < 5; i++) {
  console.log(i)
}

console.log(i)

//////////////////////////////////////////
// Lecture: Blocks and IIFEs

// ES6
{
  const a = 1
  let b = 2
}

// console.log(a + b)

// ES5
(function () {
  var c = 3
})();

// console.log(c)

//////////////////////////////////////////
// Lecture: Strings

let firstName = 'John'
let lastName = 'Smith'
const yearOfBirth = 1990

function calcAge(year) {
  return 2018 - year
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '.' + ' He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.')

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)

const n = `${firstName} ${lastName}`
console.log(n.startsWith('j'))
console.log(n.endsWith('sm'))
console.log(n.includes('oh'))
console.log(`${firstName} `.repeat(5))

//////////////////////////////////////////
// Lecture: Arrow Functions

const years = [1990, 1965, 1982, 1937]

// ES5
var ages5 = years.map(function(el) {
  return 2018 - el
})

console.log(ages5)

// ES6
let ages6 = years.map(el => 2018 - el)

console.log(ages6)

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`)

console.log(ages6)

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear()
  const age = now - el 
  return `Age element ${index + 1}: ${age}.`
})

console.log(ages6)

//////////////////////////////////////////
// Lecture: Arrow Functions 2

// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {

    var self = this
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color
      alert(str)
    })
  }
}
// box5.clickMe()

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => { // arrow functions gives access to this keyword without self hack
      let str = 'This is box number ' + this.position + ' and it is ' + this.color
      alert(str)
    })
  }
}
// box6.clickMe()

/*
const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => { // would share the global this which is undefined
    document.querySelector('.green').addEventListener('click', () => { // arrow functions gives access to this keyword without self hack
      let str = 'This is box number ' + this.position + ' and it is ' + this.color
      alert(str)
    })
  }
}
box66.clickMe()
*/

function Person(name) {
  this.name = name
}

// ES5
Person.prototype.myFriends5 = function(friends) {

  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el
  }.bind(this))

  console.log(arr)
}

var friends = ['Bob', 'Jane', 'Mark']
new Person('John').myFriends5(friends)

// ES6
Person.prototype.myFriends6 = function(friends) {

  let arr = friends.map((el) => {
    return `${this.name} is friends with ${el}`
  })

  console.log(arr)
}

new Person('Mike').myFriends6(friends)

//////////////////////////////////////////
// Lecture: Destructuring

// ES5
var john = ['John', 26]
// var name = john[0]
// var age = john[1]

// ES6
const [name, age] = ['John', 26]
console.log(name)
console.log(age)

const obj = {
  firstName1: 'John',
  lastName1: 'Smith'
}

const {firstName1, lastName1} = obj 
console.log(firstName1)
console.log(lastName1)

const {firstName1: a, lastName1: b} = obj
console.log(a)
console.log(b)

function calcAgeRetirement(year) {
  const age1 = new Date().getFullYear() - year
  return [age1, 65 - age1]
}

const [age1, retirement] = calcAgeRetirement(1990)
console.log(age1)
console.log(retirement)

//////////////////////////////////////////
// Lecture: Arrays

const boxes = document.querySelectorAll('.box') // returns a nodelist not an array

/*
// ES5
var boxesArr5 = Array.prototype.slice.call(boxes)
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue'
});
*/

// ES6
const boxesArr6 = Array.from(boxes) // turns nodelist into an array
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue')

/*
// ES5
for (var j = 0; j < boxesArr5.length; j++) {

  if(boxesArr5[j].className === 'box blue') {
    continue
  }

  boxesArr5[j].textContent = 'I changed to blue!'
}
*/

// ES6
for (const cur of boxesArr6) {
  if(cur.className.includes('blue')) {
    continue
  }
  cur.textContent = 'I changed to blue!'
}

// ES5
var ages7 = [12, 17, 8, 21, 14, 11]

var full = ages7.map(function(cur) {
  return cur >= 18
})
console.log(full)

console.log(full.indexOf(true))
console.log(ages7[full.indexOf(true)])

// ES6
console.log(ages7.findIndex(cur => cur >= 18))
console.log(ages7.find(cur => cur >= 18))

//////////////////////////////////////////
// Lecture: Spread Operator

function addFourAges(a, b, c, d) {
  return a + b + c + d
}

var sum1 = addFourAges(18, 30, 12, 21)
console.log(sum1)

// ES5
var ages8 = [18, 30, 12, 21]
var sum2 = addFourAges.apply(null, ages8)
console.log(sum2)

// ES6
const sum3 = addFourAges(...ages8)
console.log(sum3)

const familySmith = ['John', 'Jane', 'Mark']
const familyMiller = ['Mary', 'Bob', 'Ann']
const bigFamily = [...familySmith, ...familyMiller]
console.log(bigFamily)

const h = document.querySelector('h1')
const boxes1 = document.querySelectorAll('.box')
const all = [h, ...boxes1]

Array.from(all).forEach(cur => cur.style.color = 'purple')

//////////////////////////////////////////
// Lecture: Rest Parameters

// ES5
function isFullAge5() {
  // console.log(arguments)
  var argsArr = Array.prototype.slice.call(arguments) // turns it into an array

  argsArr.forEach(function(cur) {
    console.log((2018 - cur) >= 18)
  })
}

isFullAge5(1990, 1999, 1965)
isFullAge5(1990, 1999, 1965, 2016, 1987)

// ES6
function isFullAge6(...years) {
  years.forEach(cur => console.log((2018 - cur) >= 18))
}

isFullAge6(1990, 2001, 1965)

//////////////////////////////////////////
// Lecture: Default Parameters

 // ES5
 function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

  lastName === undefined ? lastName = 'Smith' : lastName

   this.firstName = firstName
   this.lastName = lastName
   this.yearOfBirth = yearOfBirth
   this.nationality = nationality
 }

 var john = new SmithPerson('John', 1990)
 var emaily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish')

 // ES6 Define parameters in the function call

//////////////////////////////////////////
// Lecture: Maps

const question = new Map()
question.set('question', 'What is the official name of the latest major JavaScript version?')
question.set(1, 'ES5')
question.set(2, 'ES6')
question.set(3, 'ES2015')
question.set(4, 'ES7')
question.set('correct', 3)
question.set(true, 'Correct answer :D')
question.set(false, 'Wrong, please try again!')

console.log(question.get('question'))
console.log(question.size)

if(question.has(4)) {
  // question.delete(4)
  console.log('Answer 4 is here')
}

// question.clear()

question.forEach((value, key) => console.log(`This is ${key}, and its set to ${value}`))

//////////////////////////////////////////
// Lecture: Classes

/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear - this.yearOfBirth
  console.log(age)
}

var john5 = new Person5('John', 1990, 'teacher')
console.log(john5)

// ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }

  calculateAge() {
    let age = new Date().getFullYear - this.yearOfBirth
    console.log(age)
  }
}
*/

// const john6 = new Person6('John', 1990, 'teacher')

//////////////////////////////////////////
// Lecture: Classes with Subclasses

// ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth
  console.log(age)
}

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
  Person5.call(this, name, yearOfBirth, job)
  this.olymicGames = olymicGames
  this.medals = medals
}

Athlete5.prototype = Object.create(Person5.prototype)

Athlete5.prototype.wonMedal = function() {
  this.medals++
  console.log(this.medals)
}
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10)

johnAthlete5.calculateAge()
johnAthlete5.wonMedal()

// ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
  }

  calculateAge() {
    let age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job)
    this.olympicGames = olympicGames
    this.medals = medals
  } 

  wonMedal() {
    this.medals++
    console.log(this.medals)
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10)

johnAthlete6.wonMedal()
johnAthlete6.calculateAge()