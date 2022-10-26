"use strict";

// Creare un array contenente le immagini


const items =document.querySelector(".items");

const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];


const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

let active = 0;

for (let i = 0; i < images.length; i++) {
    const photo = images[i];
    let item = document.createElement('div');
    
    item.classList.add("item");
    items.append(item);
    item.innerHTML =`<img src="${photo}"/>`;

    
    if ( i === 0 ) {
        item.classList.add("active");
    }
    
}

let item = document.querySelectorAll(".item")[active];

btnNext.addEventListener('click', function() {
    active += 1;
    
    // item.querySelectorAll(".item")[2];
    
    if ( active < 1 ) {
        item.classList.remove("active");
        
    } else if ( i === 1) {
        item.classList.add("active");
        
    } 
    
    if ( i < 2) {
        item.classList.remove("active");

    } else if ( i === 2) {
        item.classList.add("active");

    }

    if ( i < 3) {
        item.classList.remove("active");


    } else if ( i === 3) {
        item.classList.add("active");

    }

    if ( i < 4) {
        item.classList.remove("active");


    } else if ( i === 4) {
        item.classList.add("active");

    }
    
    
    
});
