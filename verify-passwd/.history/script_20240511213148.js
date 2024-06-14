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
        //! si le mot de passe contient une letter miniscule, enlever la class
        //! 'invalid' et ajouter le class 'valid'
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else{
        //! faire la contraire
        letter.classList.add('invalid');
        letter.classList.remove('valid');
    }

    //!valider les letters majiscul
    var capitalCaseLetter = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetter)){
        //! si le mot de passe contient une letter  majiscul, enlever la class
        //! 'invalid' et ajouter le class 'valid'
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else{
        //! faire la contraire
        letter.classList.add('invalid');
        letter.classList.remove('valid');
    }
}
function display(me){
    console.log(me);
}