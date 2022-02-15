// start with functon
function getinputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFiedlId,amount){
    const totalElement =document.getElementById(totalFiedlId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}










document.getElementById('deposit-button').addEventListener('click', function(){
    //  const depositInput = document.getElementById('deposit-input');
    //  const depositAmountText = depositInput.value;
    //  const depositAmount = parseFloat(depositAmountText);

    
     
    //  get current deposit 
    // const depositTotal =document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount;
    

    // update balance 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;

    // clear input filed 
    // depositInput.value = '';





    const depositAmount = getinputValue('deposit-input');
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);
});

// handle widthraw button
document.getElementById('widthraw-button').addEventListener('click', function(){
    // const widthrawInput = document.getElementById('widthraw-input');
    // const widthrawAmountText = widthrawInput.value;
    // const previousWidthrawAmount = parseFloat(widthrawAmountText);
    

    // update widthraw balance
    // const widthrawTotal = document.getElementById('widthraw-total');
    // const widthrawTotalText = widthrawTotal.innerText;
    // const previousWidthTotal = parseFloat(widthrawTotalText);
    // widthrawTotal.innerText = previousWidthrawAmount + previousWidthTotal;

    

    // update Balance after widthraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - previousWidthrawAmount;


    const widthrawAmount = getinputValue('widthraw-input');
    updateTotalField('widthraw-total', widthrawAmount);   
    updateBalance(widthrawAmount, false);
});

