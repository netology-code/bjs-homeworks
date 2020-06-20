function polindromChecker() {
    const result = palindromeInput.value.isPalindrome();
    checkedValue.innerText = `Строка ${!result && "не " || ""}является полиндромом`;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');
        const parsedMarks = marks.map(Number);
        const average = getAverageMark(parsedMarks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}