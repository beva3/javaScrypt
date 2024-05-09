let copyBtn = document.getElementById('copy')

function getPassword(){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=`{}[]|:;?<>'
    //const chars ='01'
    let pswdLength = 16;
    let password = ''

    // generate password

    for (let i = 0; i < pswdLength ; i++) {
        let nbrRandom = Math.floor(Math.random() * chars.length)
        password += chars.substring(nbrRandom, nbrRandom + 1)            
    }

    // print the password
    document.getElementById('password').value = password
    // change style of button copy
    copyBtn.style.background='blue'
    copyBtn.style.color='white'
}

// copy password
function copyPassword(){
    let inputPassword = document.getElementById('password')
    //console.log(inputPassword);
    //alert('copy password')
    
    //verify password
    if(inputPassword.value.length ==16){
        // copy password
        inputPassword.select()
        document.execCommand('copy');

        // print signature
        copyBtn.style.background='transparent'
        copyBtn.style.color='rgb(59, 52, 52)'
    }else{
        alert('generate again')
    }
    
    /**
     * et maintenant il y a une probem, apres la copy, il y a encore le reset
     */
}