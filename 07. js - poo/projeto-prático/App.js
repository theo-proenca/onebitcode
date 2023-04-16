const Database = require("./Database.js")
const Author = require("./entities/Author.js")
const Book = require("./entities/Book.js")
const Order = require("./entities/Order.js")
const Poster = require("./entities/Poster.js")
const User = require("./entities/User.js")

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users')
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, qty) {
        App.#database.addBooksToStock(bookName, qty)
    }

    getBooks() {
        return App.#database.find('books')
    }

    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, qty) {
        App.#database.addPostersToStock(posterName, qty)
    }

    getPosters() {
        return App.#database.find('poster')
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, qty}) => {
            if (product instanceof Book){
                App.#database.removeBooksFromStock(product.name, qty)
            } else if (product instanceof Poster) {
                App.#database.removePostersFromStock(product.name, qty)
            }
        })
    }

    getOrders() {
        return App.#database.find('orders')
    }

    showDatabase(){
        App.#database.showStorage()
    }
}