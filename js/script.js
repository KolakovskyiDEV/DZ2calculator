
let firstNumber = +prompt('Введите первое число');
let cecondNumber = +prompt('Введите второе число');

function multiply() {
    let result1 = firstNumber * cecondNumber;
    console.log(`Результат1: первое число * второе число = ${result1}`);
}

multiply();

function sum() {
    let result2 = firstNumber + cecondNumber;
    console.log(`Результат2: первое число + второе число = ${result2}`);
}

sum();

function min() {
    let result3 = firstNumber - cecondNumber;
    console.log(`Результат3: первое число - второе число = ${result3}`);
}

min();

function del() {
    let result4 = firstNumber / cecondNumber;
    console.log('Результат4: первое число / второе число =' +' '+result4);
}

del();
