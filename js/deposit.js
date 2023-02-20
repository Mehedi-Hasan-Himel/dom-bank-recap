/* 
1. add event listener to the deposit button.
2.  get deposit amount from the deposit input field.
2-5. convert deposit amount to number type.
3. clear the deposit input field after getting value.
4. get the previou deposit amount from the deposit total.
5. calculate deposit total and set the value to the deposit total.
6. get current balance.
7. calculate new balance and set the value to the balance total.
*/

// step-01
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-02
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-03
  depositField.value = "";

  // step-04
   const depositTotalElement = document.getElementById("deposit-total");
   const previousDepositTotalString = depositTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString); 

   // step-05
   const newDepositTotal = previousDepositTotal + newDepositAmount;
   depositTotalElement.innerText = newDepositTotal;

   // step-06
   const balanceTotalElement = document.getElementById("balance-total");
   const previousBalanceTotalString = balanceTotalElement.innerText
   const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
   

   // step-07
   const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
   balanceTotalElement.innerText = newBalanceTotal;
   
});
