//nome dell'utente
const userName = document.getElementById('nome');
console.log(userName);

//km da percorrere
const kilometersToGo = document.getElementById('km');
console.log(kilometersToGo);

//l'età del passeggero.
const age = document.getElementById('eta');     
console.log(age);

//il prezzo del biglietto è definito in base ai km (0.21 € al km).
const pricePerKm = 0.21;
const initialPrice = kilometersToGo * pricePerKm;
console.log(initialPrice);
let price;

const element = document.querySelector('button');

element.addEventListener('click', function(){


    //va applicato uno sconto del 20% per i minorenni e 40% per i over 65.
    if (age < 18 ) {
        const sconto = 20 / 100;
        price = initialPrice - (initialPrice * sconto);
        
    } else if (age > 65) {
        const sconto = 40 / 100;
        price = initialPrice - (initialPrice * sconto);

    } else {
        price = initialPrice;

    }
    const priceFixed = price.toFixed(2); 
    
})