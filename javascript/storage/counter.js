function clickButtonFunction() {
  console.log("run");

  if (localStorage.getItem("clickCounter") === null) {
    localStorage.setItem("clickCounter", "0");
  }

  var value = parseInt(localStorage.getItem("clickCounter"));
  var newValue = value + 1;

  localStorage.setItem("clickCounter", newValue);
  document.getElementById("clickCounter").innerHTML = newValue;
}

function clickButtonFunctionSession() {
  console.log("run");

  if (sessionStorage.getItem("clickCounterSession") === null) {
    sessionStorage.setItem("clickCounterSession", "0");
  }

  var value = parseInt(sessionStorage.getItem("clickCounterSession"));
  var newValue = value + 1;

  sessionStorage.setItem("clickCounterSession", newValue);
  document.getElementById("clickCounterSession").innerHTML = newValue;
}

function clickReset() {
  localStorage.setItem("clickCounter", "0");
  document.getElementById("clickCounter").innerHTML = "0";
}
