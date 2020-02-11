// тут пусто, так как нету UI
//Задача №3
function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let x1;
    let x2;
    let roots;
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        roots = [x1, x2];
        return {
            D,
            roots
        };
    } else if (D === 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        roots = [x1];
        return {
            D,
            roots
        }
    } else {
        return {
            D
        };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log("Вычисляем корни квадратного уравнения: " + arguments[0] + "x + " + arguments[1] + "x + " + arguments[2]);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D > 0) {
        console.log(`Уравнение имеет два корня: x₁ = ${result.roots[0]}, x₂ = ${result.roots[1]}`);
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень: x₁ = ${result.roots}`);
    } else {
        console.log(`Уравнение не имеет вещественных корней`);;
    }
}

showSolutionsMessage(2, 4, -3);

//Задача №2

function meanValue(score) {
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum = sum + score[i];
    }
    let result = sum / score.length;
    return result;
}

function getAverageScore(data) {
    let value = new Object();
    for (let prop in data) {
        value[prop] = meanValue(data[prop]);
    }
    let averageSum = 0;
    let propSum = 0;
    for (let prop in value) {
        averageSum = averageSum + value[prop];
        propSum = propSum + 1;
    }
    let average = averageSum / propSum;
    let averageProp = "averageScore";
    value[averageProp] = average;
    return value;
}

console.log(getAverageScore({
    Algebra: [2, 3],
    Geometry: [2, 4],
    Russian: [4, 2, 3, 4, 4, 3, 3, 5],
    Physics: [5, 5],
    Music: [2, 2, 5],
    English: [4, 4, 3],
    Poetry: [5, 3, 4],
    Chemistry: [2],
    French: [4, 4]
}));

//Задача№ 3

function decryptionKey(key) {
    let result;
    if (key == 0) {
        result = "Rodrigo";
    } else {
        result = "Emilio";
    }
    return result;
}

function getPersonData(secretData) {
    let man = new Object();
    for (let i in secretData) {
        let person = secretData[i];
        man[i] = decryptionKey(person);
    }
    let person = {
        firstName: man.aaa,
        lastName: man.bbb
    }
    return person;
}

console.log(getPersonData({ aaa: 0, bbb: 0 }));
console.log(getPersonData({ aaa: 1, bbb: 0 }));
console.log(getPersonData({ aaa: 0, bbb: 1 }));
console.log(getPersonData({ aaa: 1, bbb: 1 }));
