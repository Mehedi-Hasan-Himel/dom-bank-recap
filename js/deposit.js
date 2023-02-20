/* 
1. add event listener to the deposit button.
2.  get deposit amount from the deposit input field.
2-5. convert deposit amount to number type.
3. clear the deposit input field after getting value.
4. get the previou deposit amount from the deposit total.
5. calculate deposit total and set the value to the deposit total.
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
});
