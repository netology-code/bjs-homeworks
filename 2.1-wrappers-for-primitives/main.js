function calculateMortgage() {
    let percent = Number.parseInt(window.percent.value);
    let contribution = Number.parseInt(window.contribution.value);
    let amount = Number.parseInt(window.amount.value);
    let date = new Date(window.date.value);

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}