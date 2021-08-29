//generate random pin
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";

  const generatedPin = pinString.length == 4 ? pin : getPin();
  return generatedPin;
}
//show generated pin
function generatePin() {
  document.getElementById("display-pin").value = getPin();
}

// input pin
document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const inputPin = document.getElementById("input-pin");
  if (isNaN(number)) {
    if (number == "C") {
      inputPin.value = "";
    }
  } else {
    inputPin.value = inputPin.value + number;
  }
});

// display notification function
function displayNotify(id, display) {
  document.getElementById(id).style.display = display;
}

// validate pin
function validatePin() {
  const generatedPin = document.getElementById("display-pin").value;
  const typedPin = document.getElementById("input-pin").value;

  //   display notify
  if (generatedPin == typedPin) {
    displayNotify("notify-success", "block");
    displayNotify("notify-failure", "none");
  } else {
    displayNotify("notify-success", "none");
    displayNotify("notify-failure", "block");
  }
}
