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

//TODO : lors que user clique en dehors du champ de mot de passe, masqueer la boite de message
myInput.onblur = function(){
    document.getElementById('message').style.display = 'none';
}

//TODO: lorsque user commance  taper qlqs chise dans le champs de mot de passe
myInput.onkeyup = function(){
    //!valider les letters miniscule
    var lowerCaseLetter = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetter)){
        letter.classList.remove('invalid');
        letter.classList.add('valid');
        display()
    }
}
function display(me){
    console.log(me);
}