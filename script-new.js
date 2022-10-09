//Login button event handler
let loginBtn = document.getElementById('login').addEventListener('click',function(){
    let loginArea = document.getElementById('login-area');
    loginArea.style.display= "none";

    let transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display= "block";
});

function getTotalAmount(idCurrent,idNew){
    let currentAmount = document.getElementById(idCurrent);
    let newAmount = document.getElementById(idNew);
    let totalAmount = parseInt(currentAmount.innerText) + parseInt(newAmount.value);
    currentAmount.innerText = totalAmount;
}

//Deposit button event handler
let depositBtn = document.getElementById('deposit-btn').addEventListener('click',function(){
    getTotalAmount('current-deposite','deposit');
    getTotalAmount('balance','deposit');    
    deposit.value ='';// I don't know yet why this works
});

//Withdraw button event handler
let withdrawBtn = document.getElementById('withdraw-btn').addEventListener('click',function(){
    getTotalAmount('current-withdraw','withdraw');
    // //for balance
    let balance = document.getElementById('balance');
    let newBalance = parseInt(balance.innerText) - parseInt(withdraw.value);
    balance.innerText= newBalance;   
    withdraw.value ='';
});
