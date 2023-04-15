class Character {
    constructor(fullname, hp, atk, def) {
        this.fullname = fullname
        this.hp = hp
        this.atk = atk
        this.def = def
    }

    Attack(character){
        character.hp -= this.atk - character.def
    }
}
class Thief extends Character {
    Attack(character){
        character.hp -= (this.atk - character.def) * 2
    }
}

class Mage extends Character {
    constructor(fullname, hp, atk, def, magic) {
        super(fullname, hp, atk, def)
        this.magic = magic
    }

    Attack(character){
        character.hp -= (this.atk + this.magic) - character.def
    }

    Heal(){
        this.hp += magic * 2
    }
}

class Warrior extends Character {
    constructor(fullname, hp, atk, def, shield, shieldPosition) {
        super(fullname, hp, atk, def)
        this.shield = shield
        this.shieldPosition = 'ataque'
    }

    Attack(character){
        if (this.shieldPosition === 'ataque') {
            character.hp -= this.atk - character.def
        } else {
            console.log('A posição do escudo deve ser de ataque para que o ataque seja feito!')
        }
    }

    changeShield(){
        if (this.shieldPosition === 'ataque') {
            this.shieldPosition = 'defesa'
            this.def += this.shield
        } else {
            this.shieldPosition = 'ataque'
            this.def -= this.shield
        }
    }
}

module.exports = {
    Character,
    Thief,
    Mage,
    Warrior,
}