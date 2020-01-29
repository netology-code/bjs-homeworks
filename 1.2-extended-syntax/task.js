function calculateQuadraticEquation() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a, b, c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = " + result;
}

function getResult(a, b, c) {
    let d = b * b - 4 * a * c;
    let array = [];
    if (d > 0) {
        return array = [
            ((-b + Math.sqrt(d)) / (2 * a)),
            ((-b - Math.sqrt(d)) / (2 * a))
        ];
    } else if (d === 0) {
        return array = [((-b + Math.sqrt(d)) / (2 * a))];
    } else {
        return [];
    }
}

function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number).filter((n) => !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    let sli = marks.slice(0, 5);
    let sum = 0;
    for (let i = 0; i < sli.length; i++) {
        sum = sum + sli[i];
    }
    if (marks.length > 5) {
        return ("Количество оценок превышает 5" + " " + sum / sli.length);
    }
    return sum / sli.length;
}

function calculateDrinkTask() {
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}


function askDrink(name, dateOfBirthday) {
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age >= 18) {
        return (`Не желаете ли олд-фэшн, ${name} ?`);
    } else {
        return (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }
}
