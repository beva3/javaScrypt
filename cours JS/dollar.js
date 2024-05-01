function hello(user){
    //return 'hello' +' '+ user;
    return `hello ${user} !!!`;
    /**
     * warning <> "" '' `` they are many caracter
     */
}
/// fonction affichage
function echo(str){
    return console.log(str);
}
/// affiche CIN
function CIN(userName,phoneNumber,email){
    echo(`NAME  : ${userName}`);
    echo(`PHONE : ${phoneNumber}`);
    echo(`EMAIL : ${email}`);
}
/// make CIN
CIN("Raphael RANDRIANANTOANINA","0345778605","mizabienvenu@gmail.com");
/// test dolar
console.log(hello("raphael"));