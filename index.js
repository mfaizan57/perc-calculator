//  Input Prompts
const firstNumber = Number(prompt("Enter the Obtained marks:"));
const secondNumber = Number(prompt("Enter the Total marks:"));

// calculation performed
const percentage = (firstNumber / secondNumber) * 100;

const result = Math.round(percentage);
// Display the result   
alert("You got " + firstNumber + " marks out of " + secondNumber + ". Your percentage is " + result + "%");