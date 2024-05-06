let copyBtn = document.getElementById('copy')

function getPassword(){
    let password = 'this is a password'

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
    // copy password
    inputPassword.select()
    document.execCommand('copy');

    // print signature
    copyBtn.style.background='transparent'
    copyBtn.style.color='rgb(59, 52, 52)'

    /**
     * et maintenant il y a une probem, apres la copy, il y a encore le reset
     */
}