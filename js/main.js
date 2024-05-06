'use strict';

//////////////////////////////////////////////////////////

let listaSpesa = ["Pane", "Pasta", "Carne", "Farina", "Latte", "Uova", "Biscotti", "Caffè", "Zucchero", "Prosciutto"];

let ul = document.querySelector('ul');

let i = 0;
while (i < listaSpesa.length) {

    let li = document.createElement('li');

    li.append(listaSpesa[i]);
    ul.append(li);

    i++;
}