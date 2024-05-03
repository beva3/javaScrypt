let t_Now = new Date();

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

    document.getElementsByClassName("h").textContent = h;
}
time_display();