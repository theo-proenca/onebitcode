const Installment = require("./Installment")

module.exports = class Loan {
    static #interest = 1.05

    static get interest(){
        return Loan.#interest
    }

    static set interest(newFeePercentage) {
        Loan.#interest = 1+ (newFeePercentage/100)
    }

    constructor(value, installments) {
        this.value = value
        this.installments = []
        for (let i = 1; i <= installments; i++) {
            this.installments.push(new Installment((value * Loan.#interest) / installments, i))
        }
        this.createdAt = new Date ()
    }
}