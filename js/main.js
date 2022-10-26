"use strict";

// Creare un array contenente le immagini

const img1 = document.createElement("img");
img1.src = "img/01.jpg";
const img2 = document.createElement("img");
img2.src = "img/02.jpg";
const img3 = document.createElement("img");
img3.src = "img/03.jpg";
const img4 = document.createElement("img");
img4.src = "img/04.jpg";
const img5 = document.createElement("img");
img5.src = "img/05.jpg";

const items =document.querySelector(".items");

const images = [img1, img2, img3, img4, img5];

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

let active = 0

for (let i = 0; i < images.length; i++) {
    const photo = images[i];
    
    let item = document.createElement('div');
    item.classList.add("item");
    items.append(item);
    item.append(photo);

    if ( i === 0 ) {
        item.classList.add("active");
    
    }
    
    
    btnNext.addEventListener('click', function() {
        active += 1;
    });
}