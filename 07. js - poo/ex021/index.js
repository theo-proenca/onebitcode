const { Character, Thief, Mage, Warrior } = require("./Character.js");

const warrior = new Warrior('Dibaz', 100, 40, 20, 10)
console.log(warrior)

const thief = new Thief('Diboz', 100, 30, 20, 10)
console.log(thief)

const mage = new Mage('Dibez', 100, 30, 20, 10, 30)
console.log(mage)

thief.Attack(mage)
console.log(mage)

mage.Attack(thief)
console.log(thief)