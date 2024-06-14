var passwd =    document.getElementById('passwd');     //!display(passwd)
var min =       document.getElementById('min');           //!display(min)
var maj =       document.getElementById('maj');           //!display(maj);
var number =    document.getElementById('number');     //!display(number

// TODO: lors qu'on complet le champ
passwd.onfocus = function(){
    // !alert('this is a password');
    // !display(document.getElementsByClassName('message'));
    document.getElementById('message').style.display = 'flex';
}
// TODO: lorsquon quitte le champ du password
passwd.onblur = function(){
    // !alert('this is a password');
    // !display(document.getElementsByClassName('message'));
    document.getElementById('message').style.display = 'none';
}
// TODO : lors qu'on commence a taper
passwd.onkeyup = function(){
    let nbrs = /[0-9]/g;
    let mins = /[a-z]/g;
    let majs = /[A-Z]/g;
    
    /**
     * ! comment simplifie ces condition en utilisant Dict 
     * ! or tab or ...
     */

    //TODO :nbrs
    if(passwd.value.match(nbrs)){
        //TODO ajout du style correct
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else{
        number.classList.add('invalid');
        number.classList.remove('valid');
    }

    //TODO :min
    if(passwd.value.match(mins)){
        //TODO ajout du style correct
        min.classList.remove('invalid');
        min.classList.add('valid');
    }else{
        min.classList.add('invalid');
        min.classList.remove('valid');
    }

    //TODO :maj
    if(passwd.value.match(majs)){
        //TODO ajout du style correct
        maj.classList.remove('invalid');
        maj.classList.add('valid');
    }else{
        maj.classList.add('invalid');
        maj.classList.remove('valid');
    }
    
    //TODO :length
    if(passwd.value.length >= 10){
        //TODO ajout du style correct
        lengthPaswd.classList.remove('invalid');
        lengthPaswd.classList.add('valid');
    }else{
        lengthPaswd.classList.add('invalid');
        lengthPaswd.classList.remove('valid');
    }
}
function display(me){
    console.log(me);
}