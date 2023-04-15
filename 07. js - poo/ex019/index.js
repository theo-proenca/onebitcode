const Author = require("./Author")

const john = new Author("John Doe")

const post = john.writePost("Post title", "Post body")

post.addComment("Dibas", "Very good!")
post.addComment("Nelson", "Very good!")

console.log(john)
console.log(post)
