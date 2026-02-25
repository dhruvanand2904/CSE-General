/* SWITCH CALCULATORS */
function showCalculator(id) {
  document.querySelectorAll('.calculator').forEach(c => c.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

/* BASIC */
let display = document.getElementById("basicDisplay");

function append(val) {
  display.value += val;
}

function calculate() {
  display.value = eval(display.value);
}

function clearDisplay() {
  display.value = "";
}

/* SCIENTIFIC */
let sciDisplay = document.getElementById("sciDisplay");

function appendSci(val) {
  sciDisplay.value += val;
}

function calculateSci() {
  sciDisplay.value = eval(sciDisplay.value);
}

function sci(type) {
  let x = parseFloat(sciDisplay.value);
  if (type === "sin") sciDisplay.value = Math.sin(x);
  if (type === "cos") sciDisplay.value = Math.cos(x);
  if (type === "tan") sciDisplay.value = Math.tan(x);
  if (type === "sqrt") sciDisplay.value = Math.sqrt(x);
}

function clearSci() {
  sciDisplay.value = "";
}

/* COMPOUND INTEREST */
function calculateCI() {
  let P = parseFloat(document.getElementById("principal").value);
  let R = parseFloat(document.getElementById("rate").value) / 100;
  let T = parseFloat(document.getElementById("time").value);
  let N = parseFloat(document.getElementById("n").value);

  let A = P * Math.pow(1 + R / N, N * T);
  let CI = A - P;

  document.getElementById("ciResult").innerHTML =
    `Final Amount: ₹${A.toFixed(2)} <br> Compound Interest: ₹${CI.toFixed(2)}`;
}
