"use strict";

// Creare un array contenente le immagini


const items =document.querySelector(".items");

const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];


const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");


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
let active = 0;

let item = document.querySelectorAll(".item")[active];

btnNext.addEventListener('click', function() {
    item = document.querySelectorAll(".item")[0];
    item.classList.remove("active");
    active += 1;
    
    if ( active === 1) {

        item = document.querySelectorAll(".item")[1];
        item.classList.add("active");
        
    } else if ( active === 2 ) {
        item = document.querySelectorAll(".item")[1];
        item.classList.remove("active");
        item = document.querySelectorAll(".item")[2];
        item.classList.add("active");

    } else if ( active === 3 ) {
        item = document.querySelectorAll(".item")[2];
        item.classList.remove("active");
        item = document.querySelectorAll(".item")[3];
        item.classList.add("active");
        
    } else if ( active === 4 ) {
        item = document.querySelectorAll(".item")[3];
        item.classList.remove("active");
        item = document.querySelectorAll(".item")[4];
        item.classList.add("active");
        
    } else if ( active === 5 ) {
        item = document.querySelectorAll(".item")[4];
        item.classList.remove("active");
        item = document.querySelectorAll(".item")[5];
        item.classList.add("active");
        
    } else if ( active > 5 ) {
        active === 0;
    }
   
});
