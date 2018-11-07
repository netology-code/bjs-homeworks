

function CalculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = GetResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function GetResult(a,b,c){
    //return x;
}

function CalculateDrinkTask(){
    let name = window.name.value;
    let age = +window.age.value;
    let drink = AskDrink(name, age);
    window.drink.textContent = drink;
}

function AskDrink(name,age){
    return null;
}

function CalculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = GetAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function GetAverageMark(marks){
    return null;
}