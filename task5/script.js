const formTake = document.getElementById('formTake');
const duplicateField = document.getElementById('duplicateField');
const textInput = document.getElementById('textInput');

textInput.onkeyup = function(){
    let textInputVal = document.getElementById('textInput').value;
    duplicateField.textContent = textInputVal; 
}

formTake.onsubmit = function(event){
    let textInputVal = document.getElementById('textInput').value;
    event.preventDefault();
    if(textInputVal == ''){
        alert('Введите что нибудь')
    }else{
        duplicateField.textContent = ''; 
        console.log(textInputVal);
        document.getElementById('textInput').value = '';
    }

    
}