const Address = require("./Address")
const Person = require("./Person")

const addr = new Address("São Luiz", 622, "Centro","Canoas","RS")
const john = new Person("John Doe", addr)

console.log(john)
console.log(john.address.fullAddress())