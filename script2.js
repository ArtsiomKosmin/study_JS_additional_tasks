let num = 266219;
let str = num.toString().split('');
let multiplication = 1;
for(let i = 0; i < str.length; i++) {
    multiplication = multiplication * str[i];
}
console.log(multiplication);

let pow = multiplication ** 3;
console.log(pow);

console.log(pow.toString().substring(0,2));
