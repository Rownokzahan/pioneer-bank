document.getElementById('deposit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    updateAmounts("deposit");
});

document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault();
    updateAmounts("withdraw");
});

function updateAmounts(idName) {
    const amount = parseInt(document.getElementById(idName).value);
    if (amount < 0 || isNaN(amount)) {
        alert(`Please enter valid ${idName} amount`);
        return;
    }

    if (idName == "withdraw") {
        // withdraw amount can't be more than balance
        if (amount > parseInt(document.getElementById('balance').innerText)) {
            alert(`Your withdraw amount can't be more than your balance`);
            return;
        }
        //update balance for withdraw
        document.getElementById('balance').innerText = parseInt(document.getElementById('balance').innerText) - amount;
    }

    else {
        //update balance for deposit
        document.getElementById('balance').innerText = parseInt(document.getElementById('balance').innerText) + amount;
    }

    document.getElementById(`current-${idName}`).innerText = parseInt(document.getElementById(`current-${idName}`).innerText) + amount;

    //reset input value
    document.getElementById(idName).value = "";
}

