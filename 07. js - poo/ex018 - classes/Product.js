class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(qty) {
        this.inStock += qty
    }

    calculateDiscount(discount) {
        this.price = this.price - (this.price*discount/100)
    }
}


const iphone = new Product("Iphone 12", "test", 1200)

iphone.addToStock(25)
iphone.calculateDiscount(10)

console.log(iphone)