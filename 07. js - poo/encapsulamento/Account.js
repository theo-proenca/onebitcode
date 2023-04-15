class Account {
    #password
    #balance = 0
    constructor(user){
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password) {
        if (this.#authenticate(email,password)) {
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email,password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "theoproenca@gmail.com",
    password: "1234"
}

const myAccount = new Account(user)
console.log(myAccount.getBalance("theoproenca@gmail.com","12345"))