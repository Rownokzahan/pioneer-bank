//Login button event handler
let loginBtn = document.getElementById('login').addEventListener('click',function(){
    let loginArea = document.getElementById('login-area');
    loginArea.style.display= "none";

    let transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display= "block";
});

//Deposit button event handler
let depositBtn = document.getElementById('deposit-btn').addEventListener('click',function(){

    let deposit = document.getElementById('deposit');
    //for deposite
    let currentDeposit = document.getElementById('current-deposite');
    let newDeposite = parseInt(currentDeposit.innerText) + parseInt(deposit.value);
    currentDeposit.innerText = newDeposite;
    
    //for balance
    let balance = document.getElementById('balance');
    let newBalance = parseInt(balance.innerText) + parseInt(deposit.value);
    balance.innerText=newBalance;
    
    deposit.value ='';


});

//Withdraw button event handler
let withdrawBtn = document.getElementById('withdraw-btn').addEventListener('click',function(){

    let withdraw = document.getElementById('withdraw');
    //for deposite
    let currentWithdraw = document.getElementById('current-withdraw');
    let newWithdraw = parseInt(currentWithdraw.innerText) + parseInt(withdraw.value);
    currentWithdraw.innerText = newWithdraw;

    //for balance
    let balance = document.getElementById('balance');
    let newBalance = parseInt(balance.innerText) - parseInt(withdraw.value);
    balance.innerText= newBalance;
    
    withdraw.value ='';
});
