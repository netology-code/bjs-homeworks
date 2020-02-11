function calculateTotalMortgage(percent, contribution, amount, date) {
    percent = +percent;
    contribution = +contribution;
    amount = +amount;
    date = +date;
    if (isNaN(percent)) {
        return 'Параметр процент содержит неправильное значение';
    } else if (isNaN(contribution)) {
        return 'Параметр начальный взнос содержит неправильное значение';
    } else if (isNaN(amount)) {
        return 'Параметр сумма кредита содержит неправильное значение';
    } else if (isNaN(date)) {
        return 'Параметр дата содержит неправильное значение';
    }
    let now = new Date();
    now = +now;
    let months = (date - now) / 2.628e+9;
    months = Math.ceil(months);
    let P = ((percent / 12) / 100);
    let monthlyFee = amount * (P + P / ((Math.pow((1 + P), months)) - 1));
    let totalAmount = ((monthlyFee * months) - contribution);
    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    let greeting;
    if (name != undefined && name != null && name != "") {
        greeting = `Привет, мир! Меня зовут ${name}.`;
    } else {
        greeting = `Привет, мир! Меня зовут Аноним.`;
    }
    return greeting;
}
