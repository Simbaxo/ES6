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