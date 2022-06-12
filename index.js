let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
const showArithmetic = document.getElementById("sum-el");
// Create four functions: add(), subtract(), divide(), multiply()
const add = () =>  showArithmetic.textContent +=  num1 + num2

const subtract = () => showArithmetic.textContent += num1 - num2;

const divide = () => showArithmetic.textContent += num1 / num2;

const multiply = () => showArithmetic.textContent += num1 * num2;

const reset = () => (showArithmetic.textContent = 'Sum: ');
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
const addBtn = document.querySelector(".add")
addBtn.addEventListener("click",add)

const subBtn = document.querySelector(".sub");
subBtn.addEventListener("click", subtract);

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", divide);

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", multiply);


const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", reset);
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


