
let btns_text = document.querySelectorAll('.btns_text');
const text_align =["left","center","right","justify"];

let btn_file = document.querySelectorAll('.btn_file');
const file_methode =["open","new","save"];

let text_area = document.querySelector('textarea');
console.log(text_area);

/**
 * !    chenge the taxt's align
 * !    "left","center","right","justify"
 * TODO:
 */

for (let i = 0; i < text_align.length; i++) {
    btns_text[i].addEventListener('click', ()=>{
        // console.log(text_align[i]);
        text_area.style.textAlign = text_align[i];
    });

}

/**
 * !file methode
 */

for (let i = 0; i < btn_file.length; i++) {
    btn_file[i].addEventListener('click', ()=>{
        console.log(file_methode[i]);
    });
}