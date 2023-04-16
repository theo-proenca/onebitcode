module.exports = class Transfer {
    constructor(fromUser, toUser, value) {
        this.value = value
        this.createdAt = new Date ()
        this.fromUser = fromUser
        this.toUser = toUser
    }
}