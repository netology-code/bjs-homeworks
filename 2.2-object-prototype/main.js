function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

master
function getAverageMark(marks) {
pr/36
    // код для задачи №2 писать здесь
}

    let count = 0;
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        count = count + 1;
        sum = sum + marks[i];
    }
    let average = sum / count;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}
 master

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}
master
