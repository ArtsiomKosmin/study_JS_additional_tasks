let leng = prompt('Выберите язык ru/en');

if (leng === 'ru') {
    console.log('Понедельник');
    console.log('Вторник');
    console.log('Среда');
    console.log('Четверг');
    console.log('Пятница');
    console.log('Суббота');
    console.log('Воскресенье');
} else if (leng === 'en') {
    console.log('Monday');
    console.log('tuesday');
    console.log('wednesday');
    console.log('thursday');
    console.log('friday');
    console.log('saturday');
    console.log('sunday');
} else {
    console.log('Введите en или ru');
}


switch (leng) {
    case 'ru':
        console.log('Понедельник');
        console.log('Вторник');
        console.log('Среда');
        console.log('Четверг');
        console.log('Пятница');
        console.log('Суббота');
        console.log('Воскресенье');
        break;
    
    case 'en':
        console.log('Monday');
        console.log('tuesday');
        console.log('wednesday');
        console.log('thursday');
        console.log('friday');
        console.log('saturday');
        console.log('sunday');
        break;

    default:
        console.log('Введите en или ru');
        break;
}


let mas = [];
    mas['ru'] =  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    mas['en'] = ['Monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

console.log(mas[leng]);   


let namePerson = prompt('Введите имя человека');
let positionHeld = namePerson === 'Артем' ? "Директор" : namePerson === 'Максим' ? "Преподователь" : "Студент";
console.log(positionHeld);


