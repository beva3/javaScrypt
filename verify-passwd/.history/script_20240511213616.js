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
    var capitalCaseLetter = /[A-Z]/g;
    if(myInput.value.match(capitalCaseLetter)){
        //! si le mot de passe contient une letter  majiscul, enlever la class
        //! 'invalid' et ajouter le class 'valid'
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }else{
        //! faire la contraire
        capital.classList.add('invalid');
        capital.classList.remove('valid');
    }

    //!valider les letters chiffre
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)){
        //! si le mot de passe contient une letter  chiffre, enlever la class
        //! 'invalid' et ajouter le class 'valid'
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else{
        //! faire la contraire
        number.classList.add('invalid');
        number.classList.remove('valid');
    }

    //!valider la longueur
    if(myInput.value.length >=8)){
        //! si le mot de passe contient une letter  chiffre, enlever la class
        //! 'invalid' et ajouter le class 'valid'
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else{
        //! faire la contraire
        number.classList.add('invalid');
        number.classList.remove('valid');
    }
}
function display(me){
    console.log(me);
}