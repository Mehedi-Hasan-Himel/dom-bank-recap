

document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
   1. get element by id.
   2. get value from input field.
   3. convert string value from number.
   */

  const newDepositAmount = getInputFieldValueById("deposit-field");

  /* 
   1. get previous deposit total by id
   */

  const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
   const newDepositTotal = previousDepositTotal + newDepositAmount;
   
   // update deposit total
   setTextElementValueById("deposit-total", newDepositTotal);

   // update account balance
   const previousBalance = getTextElementValueById("balance-total");
   const newBalance = previousBalance + newDepositAmount;
   setTextElementValueById("balance-total", newBalance);

});
