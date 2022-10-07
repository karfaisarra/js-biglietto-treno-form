
let price;
let discount;
const element = document.querySelector('button');

element.addEventListener('click', function(){
    console.log('hai cliccato il pulsante');
        //nome dell'utente
    const userName = document.getElementById('nome');
    console.log(userName.value);

    //km da percorrere
    const kilometersToGo = document.getElementById('km');
    console.log(kilometersToGo.value);

    //l'età del passeggero.
    const age = document.getElementById('eta');     
    console.log(age.value);
    //il prezzo del biglietto è definito in base ai km (0.21 € al km).
    const pricePerKm = 0.21;
    const initialPrice = kilometersToGo.value * pricePerKm;
    console.log(initialPrice);
    //va applicato uno sconto del 20% per i minorenni e 40% per i over 65.
    if (age.value < 18 ) {
        const sconto = 20 / 100;
        price = initialPrice - (initialPrice * sconto);
        console.log('sono minorenne');
        console.log('price', price);
        discount = 'Sconto Minorenne';
    } else if (age.value > 65) {
        const sconto = 40 / 100;
        price = initialPrice - (initialPrice * sconto);
        console.log('sono vecchio');
        console.log('price', price);
        discount = 'Sconto di 40%';
    } else {
        price = initialPrice;
        console.log('sono maggiorenne' );
        console.log('price', price);
        discount = 'Nessun Sconto da applicare';
    }
    document.getElementById('name').innerHTML = `${userName.value}`;
    const priceFixed = price.toFixed(2); 
    document.getElementById('prezzo').innerHTML = `${priceFixed}€`;
    document.getElementById('sconto').innerHTML = `${discount}`;

})