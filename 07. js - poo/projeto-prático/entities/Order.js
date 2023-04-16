module.exports = class Order {
    #total
    #items
    #user
    constructor(items, user) {
        items.forEach(({ product, qty }) => {
            if (qty > product.inStock) {
                throw new Error('Quantidade insuficiente em estoque!')
            }
        })
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, { product, qty}) => sum + (product.price * qty),0)
    }

    get data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}