export class Component {
    #element = null
    constructor(tag, parent, options){
        this.tag = tag
        this.parent = parent
        this.options = options
        this.Build()
    }

    getElement(){
        return this.#element
    }

    Build() {
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)
        return this
    }

    Render(){
        if (this.parent instanceof Component) {
            this.parent.getElement().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}

class Input extends Component {
    constructor(element, inputType) {
        super(element)
        this.inputType = inputType
    }
}

class Label extends Component {
    constructor(element, text) {
        super(element)
        this.text = text
    }
}

class Form extends Component {
    constructor(element, action) {
        super(element)
        this.action = action
    }
}