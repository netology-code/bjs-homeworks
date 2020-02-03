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
}