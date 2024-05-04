let t_Now = new Date();
const week ={};
function display_console(){
    console.log(t_Now);
    console.log('====== time ======');
    console.log(`${t_Now.getHours()}:${t_Now.getMinutes()}:${t_Now.getSeconds()}`);
    console.log('====== day ======');
    console.log(`${t_Now.getMonth()}`);
    console.log(`${t_Now.getSeconds()/1000}`);
}
display_console();

function time_display(){
    let h = t_Now.getHours();
    let m = t_Now.getMinutes();
    let s = t_Now.getSeconds();
    let day = t_Now.getDay();   console.log(day);
    let dt = t_Now.getDate(); console.log(dt);
    let month = t_Now.getMonth(); console.log(month);
    let year = t_Now.getFullYear(); console.log(year);
    if(h <10) h = '0'+h;
    if(m <10) m = '0'+m;
    if(s <10) s = '0'+s;
    if(dt <10) dt= '0'+dt;

    // document.getElementsByClassName("h").textContent = h; !!!! fa maninona

    document.querySelector('.h').textContent = h;
    document.querySelector('.min').textContent = m;
    document.querySelector('.sec').textContent =s;
    document.querySelector('.day').textContent = day; // entier, faire l'adaptation apres
    document.querySelector('.dt').textContent = dt; //
    document.querySelector('.month').textContent = month; // entier, faire l'adaptation apres
    document.querySelector('.year').textContent = year; //
}

document.body.onload = time_display();
//time_display();