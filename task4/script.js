const clickHref = document.getElementById('clickHref');
clickHref.onclick = function(event){
    event.preventDefault();
    var text = prompt('Введите текст для измение строки ссылки');
    clickHref.textContent = text;
}

