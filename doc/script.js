console.log("learning JavaScript");
const titre = document.querySelector('h1');
console.log(titre); // null ?

/**
 * learn evenement
 */

const box = document.querySelector('.box');
console.log(box);   // null ?

box.addEventListener('click',()=>{
    box.classList.add('active');
})