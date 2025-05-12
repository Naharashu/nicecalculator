let input = document.getElementById('display')
let c = document.getElementById('delC')

function match(a, b) {
  if (a === null || b === null) {
    return false
  }
  if (a !== b) {
    return false
  }
  return true
}

function sinh(a) {
  return Math.sinh(a)
}

function cosh(a) {
  return Math.cosh(a)
}

function tanh(a) {
  return Math.tanh(a)
}

function addOne() {
  input.value += '1'
}
function addTwo() {
  input.value += '2';
}

function addThree() {
  input.value += '3';
}

function addFour() {
  input.value += '4';
}

function addFive() {
  input.value += '5';
}

function addSix() {
  input.value += '6';
}

function addSeven() {
  input.value += '7';
}

function addEight() {
  input.value += '8';
}

function addNine() {
  input.value += '9';
}

function addZero() {
  input.value += '0';
}

function addPlus() {
  input.value += '+'
}
function addMinus() {
  input.value += '-'
}
function addDil() {
  input.value += '/'
}
function addMno() {
  input.value += '*'
}


function calcul() {
  try {
    let x = input.value
    let status = "ok"
    x = x.replace(/√/g, 'Math.sqrt');
    x = x.replace(/\^2/g, '**2');
    x = x.replace(/\^3/g, '**3');
    x = x.replace(/\^/g, '**');
    x = x.replace(/∛/g, 'Math.cbrt');
    x = x.replace(/1\//g, '1/');
    x = x.replace(/log\(/g, 'Math.log(')
    x = x.replace(/\sinh\(/g, 'Math.sinh(');
    x = x.replace(/\cosh\(/g, 'Math.cosh(');
    x = x.replace(/\tanh\(/g, 'Math.tanh(');
    if(x.includes("sin(") && !(x.includes("arcsin")) && !(x.includes("sinh"))) {
      x = x.replace(/sin\(/g, 'Math.sin(');
    }
    if(x.includes("cos(") && !(x.includes("arccos")) && !(x.includes("cosh"))) {
      x = x.replace(/cos\(/g, 'Math.cos(');
    }
    if(x.includes("tan(") && !(x.includes("arctan")) && !(x.includes("tanh"))) {
      x = x.replace(/tan\(/g, 'Math.tan(');
    }
    x = x.replace(/\arcsin\(/g, 'Math.asin(');
    x = x.replace(/\arccos\(/g, 'Math.acos(');
    x = x.replace(/\arctan\(/g, 'Math.atan(');
    x = x.replace(/cot\(/g, '1/Math.tan(');
    if(x.includes("/0")) {
      input.value = "Error 1: Divesion by zero"
      status = "zeroDiv"
    }
    if(x.includes("console") || x.includes("alert") || x.includes("http") || x.includes("XML") || x.includes("fetch") || x.includes("function") || x.includes("let")) {
      status = "XSS"
      input.value = "Error: XSS is not allowed."
      
    }
    if(status == "ok") {
      input.value = eval(x)
    }
  } catch(e) {
    console.log(e)
  }
}



function del() {
  input.value = ''
}

function addO() {
  input.value += ')'
}

function addT() {
  input.value += '('
}
function addDot() {
  input.value += '.'
}
function addPi() {
  input.value += '3.14'
}

function addKor2() {
  input.value += '√('
}

function addKor3() {
  input.value += '∛('
}

function addKvMi(n) {
  input.value += `1/`; 
}

function addKvM() {
  input.value += '^'
}

function addKv() {
  input.value += '^2'
}

function addKub() {
  input.value += '^3'
}

function addSin() {
  input.value += 'sin('
}

function addCos() {
  input.value += 'cos('
}

function addTan() {
  input.value += 'tan('
}

function addCot() {
  input.value += 'cot('
}

function addAsin() {
  input.value += 'arcsin('
}

function addAcos() {
  input.value += 'arccos('
}

function addAtan() {
  input.value += 'arctan('
}

function addSinH() {
  input.value += 'sinh('
}

function addCosH() {
  input.value += 'cosh('
}

function addTanH() {
  input.value += 'tanh('
}

function addE() {
  input.value += Math.E
}

function addLog() {
  input.value += 'log('
}


if (isNaN(input.value) === true) {
  input.value = 'Error 0: Cannot calculate this.'
}



function delLast() {
  input.value = input.value.slice(0, -1)
}

