// TODO : variable
const toogleBtn = document.getElementById('toggle-btn');
const body = document.querySelector('body');
const mainImg = document.getElementById('mainImg');
const text = document.getElementById('text');

// TODO : variable
let darkMode = localStorage.getItem('dark-mode');
// console.log(darkMode);  //! null

// TODO : traitement
const enableDarkMode = () =>{
    body.classList.add('dark-mode-toggle');
    toogleBtn.classList.add('dark-mode-toggle');
    mainImg.classList.add('dark-mode-main-image');
    text.innerHTML = 'sombre'
}
const disableDarkMode = () =>{

}

// TODO : display on the console
console.log(toogleBtn);
console.log(body);
console.log(mainImg);
console.log(text);

