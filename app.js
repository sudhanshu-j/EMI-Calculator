// Function to calculate EMI (Equated Monthly Installment)
function calculateEMI() {
  // Retrieve the loan amount input value by accessing the element with id "loanAmount"
  const loanAmount = document.getElementById("loanAmount");

  // Retrieve the interest rate input value by accessing the element with id "interestRate"
  const interestRate = document.getElementById("interestRate");

  // Retrieve the loan tenure (in years) input value by accessing the element with id "loanTenure"
  const loanTenure = document.getElementById("loanTenure");

  // Retrieve the element that will display the EMI amount (id: "emiAmount")
  const emiAmount = document.getElementById("emiAmount");

  // Retrieve the element that will display the total interest amount (id: "totalInterest")
  const totalInterest = document.getElementById("totalInterest");

  // Convert the loan amount value from a string to a floating-point number
  let amountValue = parseFloat(loanAmount.value);

  // Convert the interest rate value from a string to a floating-point number and adjust it to a monthly rate
  let rateValue = parseFloat(interestRate.value) / 100 / 12;

  // Convert the loan tenure value (years) to months by multiplying by 12
  let tenureValue = parseFloat(loanTenure.value) * 12;

  // Calculate the power term (1 + rate)^tenure for the EMI formula
  let emi = Math.pow(1 + rateValue, tenureValue);

  // Calculate the monthly EMI using the formula (loan * rate * (1 + rate)^tenure) / ((1 + rate)^tenure - 1)
  let monthlyEMI = (amountValue * emi * rateValue) / (emi - 1);

  // Check if the calculated EMI value is a valid finite number
  if (isFinite(monthlyEMI)) {
    // If valid, update the EMI display with the calculated monthly EMI value, rounded to 2 decimal places
    emiAmount.innerHTML = monthlyEMI.toFixed(2);

    // Calculate and display the total interest: (monthly EMI * tenure in months - loan amount)
    totalInterest.innerHTML = (monthlyEMI * tenureValue - amountValue).toFixed(
      2
    );
  }
}

// Event listener for the "Calculate EMI" button
let button = document.getElementById("btn");

// Add a click event listener to the button with id "btn" to calculate EMI on click
button.addEventListener("click", () => {
  // Call the function to calculate the EMI when the button is clicked
  calculateEMI();
});

// Event listener for the "Clear" button
let clearBtn = document.getElementById("btn-2");

// Add a click event listener to the button with id "btn-2" to clear the fields when clicked
clearBtn.addEventListener("click", () => {
  // Clear the input fields by setting their value to an empty string
  document.getElementById("loanAmount").value = "";
  document.getElementById("interestRate").value = "";
  document.getElementById("loanTenure").value = "";

  // Clear the EMI and total interest display fields by setting their inner HTML to "00.00"
  document.getElementById("emiAmount").innerHTML = "00.00";
  document.getElementById("totalInterest").innerHTML = "00.00";
});
