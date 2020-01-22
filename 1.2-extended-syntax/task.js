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
    let array = [x = ((-b + Math.sqrt(d)) / (2 * a)), y = ((-b - Math.sqrt(d)) / (2 * a))];
    if (d > 0) {
        return array;
    } else if (d === 0) {
        return array[0];
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
    let sum = 0;
    if (marks.length <= 5) {
        for (let i = 0; i < marks.length; i++) {
            sum = sum + marks[i];
        }
        return sum / marks.length;
    } else if (marks.length > 5) {
        for (let i = 0; i < 5; i++) {
            sum = sum + marks[i];
        }
        return ("Количество оценок превышает 5" + " " + sum / 5);
    }
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