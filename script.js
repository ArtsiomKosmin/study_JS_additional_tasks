'use strict';

let text = prompt('Введите текст', ' проверка на правильную работу12345678910111213141516171819 ');


let additionalTask = function(text) {
    let check = parseFloat(text);
    if (!isNaN(check)) {
        alert('Введите текст!');
    } else if (text.trim().length >= 30) {
        let intermediateText = text.trim();
        let replacement = intermediateText.slice(30);
        let finalText = intermediateText.replace(replacement, '...');
        return console.log(finalText);
    } else {
        let finalText = text.trim();
        return console.log(finalText);
    }
};

console.log(additionalTask(text));