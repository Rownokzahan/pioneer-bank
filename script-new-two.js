//Login button event handler
let loginBtn = document.getElementById('login').addEventListener('click',function(){
    let loginArea = document.getElementById('login-area');
    loginArea.style.display= "none";

    let transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display= "block";
});

function getTotalAmount(idCurrent,idNew,task){
    let currentAmount = document.getElementById(idCurrent);
    let newAmount = document.getElementById(idNew);
    if(task=='add'){
        let totalAmount = parseInt(currentAmount.innerText) + parseInt(newAmount.value);
        currentAmount.innerText = totalAmount;
    }
    else{
        let totalAmount = parseInt(currentAmount.innerText) - parseInt(newAmount.value);
        currentAmount.innerText = totalAmount;
    }
    
}

//Deposit button event handler
let depositBtn = document.getElementById('deposit-btn').addEventListener('click',function(){
    getTotalAmount('current-deposite','deposit','add');
    getTotalAmount('balance','deposit','add');    
    deposit.value ='';
});

//Withdraw button event handler
let withdrawBtn = document.getElementById('withdraw-btn').addEventListener('click',function(){
    getTotalAmount('current-withdraw','withdraw','add');
    getTotalAmount('balance','withdraw','sub');
    withdraw.value ='';
});
