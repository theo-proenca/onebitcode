module.exports = class Product {
    constructor(name, description, price, inStock = 0) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    addToStock(qty){
        this.inStock += qty
    }

    removeFromStock(qty) {
        this.inStock -= qty
    }
}