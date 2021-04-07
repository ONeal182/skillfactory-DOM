//Консоль
let consoleSelector = document.getElementById('consoleLog');
let consoleLogText = document.getElementById('consoleLogText');
let consoleLogChangeText = 'Пример использования команды console.log';

//Alert

let alertSelector = document.getElementById('alert');
let alertText = document.getElementById('alertText');
let alertChangeText = 'Пример использования команды alert';

//Promt

let promptSelector = document.getElementById('prompt');
let promptText = document.getElementById('promptText');
let promptChangeText = 'Пример использования команды prompt';

function onClickP(selector,selectorText, text, type){
    if(type == 'console'){
        selector.onclick = function(){
            alert('Метод вызывает вывод сообщения в '+type);
            selectorText.textContent = text;
        }
    }else if(type == 'prompt'){
        selector.onclick = function(){
            prompt('Метод вызывает вывод сообщения в '+type,'Хорошо');
            selectorText.textContent = text;
        }
    }else if(type == 'alert'){
        selector.onclick = function(){
            alert('Метод вызывает вывод сообщения в '+type,'Хорошо');
            selectorText.textContent = text;
        }
    }else{
        alert('Неизвестный тип');
    }
    
}
onClickP(consoleSelector, consoleLogText, consoleLogChangeText, 'console');
onClickP(alertSelector, alertText, alertChangeText, 'alert');
onClickP(promptSelector, promptText, promptChangeText, 'prompt');
