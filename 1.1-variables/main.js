master
// Задача 1.1
let algebra = 5;
let geography = 4;
let physics = 4;

let average = (algebra + geography + physics) / 3;

console.log(average);

// Задача 1.2
let myName = "Alexey";

let message = `Привет, мир! Меня зовут ${myName}`;

console.log(message);

// Задача 1.3*
let x = 2;
let y = 22;
let z = 0;

let result = ((x * y) + (5 * z) + x - 1);

console.log(result);

function calculateTask1(){
    let algebra = Number.parseInt(document.getElementById("algebra").value);
    let geography = Number.parseInt(document.getElementById("geography").value);
    let physics = Number.parseInt(document.getElementById("physics").value);
    if(!algebra || !geography || !physics){
        alert("Введите валидные значения");
        return;
    }

    let taskResult = averageMark(algebra, geography, physics);
    document.getElementById("task1Result").innerText = `Средняя оценка равна: ${taskResult}`;
}

function calculateTask2(){
    let userName = document.getElementById("username").value;
    if(!userName){
        alert("Введите имя пользователя");
        return;
    }
    
    let taskResult = sayHello(userName);
    document.getElementById("task2Result").innerText = taskResult;
}

function calculateTask3(){
    let taskResult = calculateFormula();
    document.getElementById("task3Result").innerText = taskResult;
} master
