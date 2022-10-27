"use strict";

// Creare un array contenente le immagini

const itemsContainer =document.querySelector(".items");

const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];

// creo ciclo per aggiungere elementi nell' HTML
for (let i = 0; i < images.length; i++) {
    const photo = images[i];
    let item = document.createElement('div');
    
    item.classList.add("item");
    item.innerHTML =`<img src="${photo}"/>`;
    
    itemsContainer.append(item);
    
    if ( i === 0 ) {
        item.classList.add("active");
    }    
}

let currentImageIndex = 0;

const items = document.querySelectorAll(".item");

// seleziono il primo item creato in precedenza e aggiunge la classe active
items[currentImageIndex].classList.add("active");

//aggiungo evento click al pulsante next
const btnNext = document.querySelector(".btn-next");

btnNext.addEventListener('click', function() {
    items[currentImageIndex].classList.remove("active");
    if ( currentImageIndex === images.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    items[currentImageIndex].classList.add("active");
       
});

// seleziono il pulsante prev
const btnPrev = document.querySelector(".btn-prev");

// aggiungo evento click al pulsante prev
btnPrev.addEventListener('click', function() {
    items[currentImageIndex].classList.remove("active"); 
    if ( currentImageIndex === 0) {
        currentImageIndex = images.length -1;
    } else {
        currentImageIndex--;
    }
    items[currentImageIndex].classList.add("active");
     
});


