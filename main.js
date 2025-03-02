let input = document.getElementById("display")

function addOne() {
  input.value += "1"
}
function addTwo() {
  input.value += "2";
}

function addThree() {
  input.value += "3";
}

function addFour() {
  input.value += "4";
}

function addFive() {
  input.value += "5";
}

function addSix() {
  input.value += "6";
}

function addSeven() {
  input.value += "7";
}

function addEight() {
  input.value += "8";
}

function addNine() {
  input.value += "9";
}

function addZero() {
  input.value += "0";
}

function addPlus() {
  input.value += "+"
}
function addMinus() {
  input.value += "-"
}
function addDil() {
  input.value += "/"
}
function addMno() {
  input.value += "*"
}


function calcul() {
  let x = input.value.replace(/√/g, "Math.sqrt");
  x = x.replace(/\^2/g, "**2")
  x = x.replace(/\^3/g, "**3")
  x = x.replace(/\^/g, "**")
  x = x.replace(/∛/g, "Math.cbrt")
  x = x.replace(/1\//g, "1/")
  x = x.replace(/sin\(/g, "Math.sin(")
  x = x.replace(/cos\(/g, "Math.cos(");
  x = x.replace(/tan\(/g, "Math.tan(");
  x = x.replace(/cot\(/g, "1/Math.tan(")
  input.value = eval(x)
}


function del() {
  input.value = ""
}

function addO() {
  input.value += ")"
}

function addT() {
  input.value += "("
}
function addDot() {
  input.value += "."
}
function addPi() {
  input.value += "3.14"
}

function addKor2() {
  input.value += "√("
}

function addKor3() {
  input.value += "∛("
}

function addKvMi(n) {
  input.value += `1/`; 
}

function addKvM() {
  input.value += "^"
}

function addKv() {
  input.value += "^2"
}

function addKub() {
  input.value += "^3"
}

function addSin() {
  input.value += "sin("
}

function addCos() {
  input.value += "cos("
}

function addTan() {
  input.value += "tan("
}

function addCot() {
  input.value += "cot("
}

if (isNaN(input.value) === true) {
  input.value = "Error"
}
