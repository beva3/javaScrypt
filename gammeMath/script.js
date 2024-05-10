var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var Message = document.querySelector('.Message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('section');
var compteur = 0;

/// nombre aleatoire du jeux
random1 = Math.random()*11<<0;  // pour generer des nobres de 0 a 11
random2 = Math.random()*11<<0;  // pour generer des nobres de 0 a 11

console.log(random1, random2);

/// inserer les nombre au hasard dans les variables nb1 et nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;

/// fonction de verificaion
function verifier(){
    //alert("go ...........")
    /// recuperer la valeur entrer par l'utilisateur
    var res = document.querySelector('.res').value;
    console.log(res);
    if(random1 + random2 == res){
        Message.style.display = "contents";
        Message.style.backgroundColor ="blue";
        Message.innerHTML ="Correct";
    }
    else{
        Message.style.backgroundColor ="red";
        Message.innerHTML ="Vous avez perdu";
    }

}
