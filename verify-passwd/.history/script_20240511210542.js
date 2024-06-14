//TODO definir les variables
var myInput = document.getElementById('psw');       //  !display(myInput);
var letter = document.getElementById('letter');     //  !display(letter);
var capital = document.getElementById('capital');   //  !display(capital);
var number = document.getElementById('number');     //  !display(number);
var length = document.getElementById('length');     //  !display(length);

//TODO : lors que user clique sur le champ de mot de passe, afficer la boite de message
myInput.onfocus = function(){
    document.getElementById('message').style.display = 'block';
}

//TODO : lors que user clique sur le champ de mot de passe, afficer la boite de message
myInput.onfocus = function(){
    document.getElementById('message').style.display = 'block';
}

function display(me){
    console.log(me);
}