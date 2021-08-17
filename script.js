function getInputValue(inputId) {
    const inputCash = document.getElementById(inputId);
    const inputCashText = inputCash.value;
    const inputCashAmount = parseFloat(inputCashText);
    inputCash.value = '';
    return inputCashAmount;
}

function initialAndInputAdd(inputId, inputCashInAmount) {
    // cash in field selection
    const cashInTotal = document.getElementById(inputId);
    const cashInTotalText = cashInTotal.innerText;
    const cashInTotalAmount = parseFloat(cashInTotalText);

    // cash in field update
    cashInTotal.innerText = cashInTotalAmount + inputCashInAmount;
}

function getMainBalance() {
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    return balanceAmount;
}

function updateBalance(inputCashInAmount, isTrue) {
    const balance = document.getElementById('balance');
    const balanceAmount = getMainBalance();

    if (isTrue == true) {
        // update balance 
        balance.innerText = balanceAmount + inputCashInAmount;
    } else {
        // update balance 
        balance.innerText = balanceAmount - inputCashInAmount;
    }

}

// cash in system 
document.getElementById('cashInBtn').addEventListener('click', function () {
    const inputCashInAmount = getInputValue('inputCashIn');
    if (inputCashInAmount > 0) {
        initialAndInputAdd('cashInTotal', inputCashInAmount);
        updateBalance(inputCashInAmount, true);
    }
})


// cash out system 
document.getElementById('cashOutBtn').addEventListener('click', function () {
    const inputCashInAmount = getInputValue('inputCashOut');
    const balanceAmount = getMainBalance();
    if (inputCashInAmount > 0 && balanceAmount > inputCashInAmount) {
        initialAndInputAdd('cashOutTotal', inputCashInAmount);
        updateBalance(inputCashInAmount, false);
    }
})