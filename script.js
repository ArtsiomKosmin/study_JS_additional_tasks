'use strict';


let weekDay = function() {
    let timeDate = new Date();
    let weekDay = timeDate.getDay();
    switch(weekDay) {
        case 0:
            return 'Воскресенье';
        case 1:
            return 'Понедельник';
        case 2:
            return 'Вторник';
        case 3:
            return 'Среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';
    }
};

let getMonth = function() {
    let timeDate = new Date();
    let month = timeDate.getMonth();
    switch(month) {
        case 0:
            return 'Января';
        case 1:
            return 'Февраля';
        case 2:
            return 'Марта';
        case 3:
            return 'Апреля';
        case 4:
            return 'Майя';
        case 5:
            return 'Июня';
        case 6:
            return 'Июля';
        case 7:
            return 'Августа';
        case 8:
            return 'Сентября';
        case 9:
            return 'Октября';
        case 10:
            return 'Ноября';
        case 11:
            return 'Декабря';
    }
};

let times = function() {
    let timeDate = new Date();
    let hours = timeDate.getHours();
    if (hours >= 5 && hours <= 20) {
        return 'часов';
    } else if (hours >= 2 && hours <= 4) {
        return 'часа';
    } else {
        return 'час';
    }
};

let addZero = function(num) {
    if (num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
};

let getTime = function() {
    let timeDate = new Date();
    console.log('Сегодня ' + weekDay() + ', ' + timeDate.getDate() + ' ' + getMonth() + ' ' + timeDate.getFullYear() + ' года, ' + timeDate.getHours() + ' ' + times() + ' ' + timeDate.getMinutes() + ' минут ' + timeDate.getSeconds() + ' секунд');
    console.log(addZero(timeDate.getDate()) + '.' + addZero(timeDate.getMonth()) + '.' + timeDate.getFullYear() + ' - ' + addZero(timeDate.getHours()) + ':' + addZero(timeDate.getMinutes()) + ':' + addZero(timeDate.getSeconds()));

};




setInterval(getTime, 1000);
