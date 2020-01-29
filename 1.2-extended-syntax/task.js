"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
	let x;
	let discriminant = b * b - 4 * a * c;
	// console.log(discriminant);
	
	if (discriminant < 0) {
		return [];
	} else if (discriminant == 0) {
		x = [(-1 * b) / (2 * a)];
		return x;
	} else {
		x = [((-1 * b) + Math.sqrt(discriminant)) / (2 * a) , ((-1 * b) - Math.sqrt(discriminant)) / (2 * a)];
		return x;
	}
    //return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
	let marksNew = marks;
	let total = 0;
	let averageMark;
	
	if (marks.length > 5) {
		marksNew = marks.slice(0, 5);
	} 
	
	for (let i = 0; i < marksNew.length; i++ ) {
		total = total + marksNew[i];
	}
	
	averageMark = total / marksNew.length;
	console.log(averageMark);
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
	let yearBirthday = dateOfBirthday.getFullYear();
	let now = new Date();
	let yearNow = now.getFullYear();
	let result;
	
	if (yearNow - yearBirthday > 18) {
		result = `Не желаете ли олд-фэшн, ${name}?`;
	} else {
		result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	}
	
    console.log(result)
    return result;
}