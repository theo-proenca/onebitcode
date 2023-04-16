module.exports = class Account {
    #balance

    constructor(user) {
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    getBalance() {
        return this.#balance
    }

    addDeposit(deposit) {
        this.deposits.push(deposit)
        this.#balance += deposit.value
    }

    addLoan(loan) {
        this.loans.push(loan)
        this.#balance += loan.value
    }

    addTransfer(transfer) {
        if (transfer.toUser.email === this.owner.email) {
            this.#balance += transfer.value
            this.transfers.push(transfer)
        } else if (transfer.fromUser.email === this.owner.email) {
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        }  
    }
}