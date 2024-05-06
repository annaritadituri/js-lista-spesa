'use strict';

//////////////////////////////////////////////////////////

//DEFINIRE LE VARIABILI
let listaSpesa = ["Pane", "Pasta", "Carne", "Farina", "Latte", "Uova", "Biscotti", "Caffè", "Zucchero", "Prosciutto"];
let ul = document.querySelector('ul');

let i = 0;
//USARE UN CICLO WHILE PER LEGGERE LE VARIABILI E INSERIRLE IN UNA LISTA
while (i < listaSpesa.length) {

    let li = document.createElement('li');

    li.append(listaSpesa[i]);
    ul.append(li);

    i++;
}

console.log({listaSpesa});

/////////////////////////////////////////////////
/*
SOLUZIONE AGGIUNTIVA
possibilità di aggiungere altri elementi in input
*/
/////////////////////////////////////////////////

//RESETTARE GLI INPUT IN MODO TALE CHE NON VENGANO RIPETUTI ANCHE GLI ELEMENTI GIÀ PRESENTI
listaSpesa = [];
let input = "";

//PERMETTERE DI AGGIUNGERE ELEMENTI CON IL CLICK DI UN PULSANTE
let buttonAdd = document.getElementById('aggiungi');
buttonAdd.addEventListener('click',
    
    function() {

        //CHIEDERE ALL'UTENTE GLI INPUT
        i = 0;
        do {

            input = prompt("Inserisci gli ingredienti che vuoi aggiungere alla tua lista della spesa e concludi l'operazione digitando STOP");

            listaSpesa[i] = input;

            console.log(listaSpesa[i]);

            i++;

        }
        //IL CICLO SI INTERROMPE QUANDO L'UTENTE INSERISCE LA PAROLA STOP
        while (input.toUpperCase() !== "STOP") {

            //FARE IN MODO CHE LO STOP NON VENGA AGGIUNTO ALLA LISTA DELLA SPESA
            listaSpesa.pop();
            
        }

        console.log({listaSpesa});

        //AGGIUNGIAMO ELEMENTI li ALL'ELENCO
        for (i = 0; i < listaSpesa.length; i++) {

            let li = document.createElement('li');

            li.append(listaSpesa[i]);
            ul.append(li);

        }

    }

)

