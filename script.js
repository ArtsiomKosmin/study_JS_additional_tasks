'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
console.log(week);
document.write(week);
document.write('<br \/>');



for (let i = 0; i < week.length; i++) { // Вопрос, почему writeln не записывает в новую строку?
    console.log(week[i]);
    document.writeln(week[i]);
    document.write('<br \/>');
}





for (let i = 0; i < week.length; i++) {
    if (i === 5 || i === 6) {
        console.log(week[i].italics());
        document.write(' ' + week[i].italics());
    } else {
        console.log(week[i]);
        document.write(' ' + week[i]);
    }
}

document.write('<br \/>');

let date = new Date();
let date1 = date.getDay();
console.log(date1);

for (let i = 1; i < week.length + 1; i++) {
    if (i === date1) {
        console.log(week[i - 1].bold());
        document.write(' ' + week[i - 1].bold());
    } else {
        console.log(week[i - 1]);
        document.write(' ' + week[i - 1]);
    }
}