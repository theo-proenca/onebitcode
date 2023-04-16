const App = require("./App.js");

App.createUser('USU01@gmail.com', 'USU01')
App.createUser('USU02@gmail.com', 'USU02')
App.createUser('USU03@gmail.com', 'USU03')

App.deposit('USU01@gmail.com', 100)
App.transfer('USU01@gmail.com', 'USU02@gmail.com', 20)

App.changeLoanInterest(10)
App.loan('USU03@gmail.com', 2000, 24)

console.log(App.findUser('USU01@gmail.com'))
console.log(App.findUser('USU01@gmail.com').account)
console.log(App.findUser('USU02@gmail.com'))
console.log(App.findUser('USU02@gmail.com').account)
console.log(App.findUser('USU03@gmail.com'))
console.log(App.findUser('USU03@gmail.com').account)
console.log(App.findUser('USU03@gmail.com').account.loans[0].installments)

