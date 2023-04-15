import { Component } from "./Component.js";
import { Input } from "./Input.js";
import { Form } from "./Form.js";
import { Label } from "./Label.js";

const title = new Component ('h1', 'body', { textContent : 'Olá, mundo!'})
console.log(title)
title.Render()

title.tag = 'h3'
title.Build().Render()

const form = new Form('body')
const label = new Label ('Nome: ', form, { htmlFor: 'nameInput'})
const input = new Input (form, { id: 'nameInput', name: 'name'})

form.Render()
label.Render()

form.addChildren(input)

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data de Nascimento: ', form, { htmlFor: 'birthdayInput'}),
    new Input (form, { id: 'birthdayInput', name: 'birthday', type: 'date'})
)