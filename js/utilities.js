function getInputFieldValueById(InputId) {
  const inputField = document.getElementById(InputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValueNumber = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValueNumber;
}

function getElementValueById(ElementId) {
  const element = document.getElementById(ElementId);
  const elementValueString = element.innerText;
  const elementValueNumber = parseFloat(elementValueString);
  return elementValueNumber;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValueNumber = parseFloat(textElementValueString);
  return textElementValueNumber;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
