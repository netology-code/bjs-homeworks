function getAnimalSound(animal) {
    if (animal == undefined) {
        return null;
    }
    let sound = "grrrr";
    if (sound != undefined) {
        return sound;
    }
}

function getAverageMark(marks) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        marks[i] = +marks[i];
        count = count + 1;
        sum = sum + marks[i];
    }
    if (sum == 0) {
        return 0;
    }
    let average = sum / count;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = new Date;
    now = +now;
    birthday = Date.parse(birthday);
    const msAtYear = 31557600000; //365.25 * 24 * 60 * 60 * 1000 милисекунд в году
    let ageGap = now - birthday;
    if (ageGap >= msAtYear * 18) {
        console.log('Да');
    } else {
        console.log('Нет');
    }
}
