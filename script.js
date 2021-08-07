'use strict';

let arr = ['3245', '234435', '3245', '789678', '45463', '25443', '243269'];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
        console.log(arr[i]);
    }
}


let check = 0;
for (let number = 0; number < 101; number++) {
    for (let i = 1; i < number + 1; i++) {
        if (number % i === 0) {
            check++;
        }
    }
    if (check === 2) {
        console.log('Делители этого числа 1 и', number);
    }
    check = 0;
}
