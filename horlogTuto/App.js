function clock(){
    const date = new Date();
    const hours = ((date.getHours() + 11)% 12 + 1);
    const minutes = date.Date.getMinutes();
    const seconds = date.Date.getSecond();
    // changes en degree
    const h = hours *30;
    const m = minutes *6;
    const s = seconds *6;

    // affichage
    document.querySelector('.heure');
}
// call hour local
document.body.onload = clock();