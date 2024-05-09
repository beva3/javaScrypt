// ! afficher la date d'aujourd'hui
setInterval(function(){
    document.getElementById('dateNow').innerHTML = Date();
},1000);
// ! generate the number
function generateNumbers(){
    document.getElementById('nb1').value = Math.floor(Math.random()*49);
    document.getElementById('nb2').value = Math.floor(Math.random()*49);
    document.getElementById('nb3').value = Math.floor(Math.random()*49);
    document.getElementById('nb4').value = Math.floor(Math.random()*49);
    document.getElementById('nb5').value = Math.floor(Math.random()*49);
    document.getElementById('nb6').value = Math.floor(Math.random()*10);
}
//! generate the pdf
 let numbers = document.querySelector('.box_6_nb');
// TODO : console.log(numbers); print the contents of class .box_6_nb

function generatePDF(){
    if(document.getElementById('nb1').value != '*'){
        //alert('run generatePDF');
        var opt = {
            margin:       1,
            filename:     'loto.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'l' }
        };
        // generate the pdf
        html2pdf().set(opt).from(numbers).save();
    }else{
        alert('Please generate the numbers');
    }
}