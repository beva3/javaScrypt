let sp,btn_start,btn_stop,t,ms,s,min,h;

// get data source
window.onload = function (){
    
    sp = document.getElementsByTagName("span");
    btn_start = document.getElementById("start");
    btn_stop = document.getElementById("stop");
    //t;
    ms=0, s=0, min=0,h=0;
}

// mettre en place le timer
function update_time(){
    ms += 1;
    if(ms >10){
        ms = 0;
        s += 1;
    }
    if(s ===60){
        s = 0;
        min += 1;
    }
    if(min === 60){
        min = 0;
        h += 1;
    }
    sp[0].innerHTML = h + 'h';
    sp[1].innerHTML = min + 'min';
    sp[2].innerHTML = s + 's';
    sp[3].innerHTML = ms + 'ms';
}

// mettre en place le bouton start
function start(){
    t = setInterval(update_time, 100);
    btn_start.disabled = true;
}
// mettre en place le bouton _stop
function _stop(){
    clearInterval(t)
    btn_start.disabled = false;
}

// mettre en place le bouton reinit
function reset(){
    clearInterval(t)
    btn_start.disabled = false;
    ms=-1, s=0, min=0,h=0;
    update_time();
}