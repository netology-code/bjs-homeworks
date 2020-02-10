"use strict";

let currentDate = new Date();

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
	let totalAmount = 0;
	let incorrectParameter = '';
	let incorrectParameterValue;
	let months = 0;
	
	let persentNumber = Number(percent);
	let contributionNumber = Number(contribution);
	let amountNumber = Number(amount);
	
	if (isNaN(persentNumber)) {
		incorrectParameter = 'Процентная ставка';
		incorrectParameterValue = percent;
		reportIncorrectparameter(incorrectParameter, incorrectParameterValue);
	}
	if (isNaN(contributionNumber)) {
		incorrectParameter = 'Начальный взнос';
		incorrectParameterValue = contribution;
		reportIncorrectparameter(incorrectParameter, incorrectParameterValue);
	}
	if (isNaN(amountNumber)) {
		incorrectParameter = 'Общая стоимость';
		incorrectParameterValue = amount;
		reportIncorrectparameter(incorrectParameter, incorrectParameterValue);
	}
	
	let refund = amountNumber - contributionNumber;
	
	console.log(typeof(date));
	console.log(currentDate);
	
	//parseInt
	
	
    //return totalAmount;
}

//функция вывода сообщения о неправильно параметре ввода
function reportIncorrectparameter(parameter, parameterValue) {
	alert(`Параметр ${parameter} содержит неправильное значение ${parameterValue}`);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}