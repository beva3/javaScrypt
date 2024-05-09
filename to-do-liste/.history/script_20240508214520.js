let addToDoButton = document.getElementById('addTodo');             //!console.log(addToDoButton);
let addToDoContainer = document.getElementById('toDocontainer');    //!console.log(addToDoContainer);
let inputField = document.getElementById('inputField');             //!console.log(inputField);

addToDoButton.onclick = function(){
    // TODO: verify if the input field is not null
    if(inputField.value != ""){
        //  !console.log(inputField);
        //  !console.log(inputField.value);
        // TODO: create a paragraph
        var paragraph = document.createElement('p');
    }
    // TODO: valorizer this paragraph with the content of input
    paragraph.innerHTML = inputField.value;

    // TODO: add style
    paragraph.classList.add('paragraph_style');

    // TODO:insert this paragraph dans l'element of toDoContainer
    addToDoContainer.appendChild(paragraph);

    inputField.value = "";

    // TODO: baree the paragraph when on click desus
    paragraph.addEventListener('click', function(){
        // TODO:alert('you select');
        paragraph.classList.add('paragraph_click');
    });

    // TODO: remove whith 
}