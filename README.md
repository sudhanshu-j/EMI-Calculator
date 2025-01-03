# EMI Calculator

A simple Loan **EMI (Equated Monthly Installment) calculator** that allows users to calculate the EMI for a loan based on the **loan amount**, **interest rate**, and **loan tenure**. This web application provides an interactive user interface that displays the **EMI amount** and **total interest** to be paid on the loan.

---

## Table of Contents

- [Description](#description)

- [Features](#features)

- [Technologies Used](#technologies-used)

- [How to Use](#how-to-use)

- [File Structure](#file-structure)

- [Code Explanation](#code-explanation)

- [Contributing](#contributing)

- [Live Demo](#live-demo)

- [Contact](#contact)

---

## Description

The Loan EMI Calculator is a web-based tool designed to calculate the monthly EMI for a loan based on:

- **Loan Amount (₹)**

- **Interest Rate (%)**

- **Loan Tenure (Years)**

Upon entering these details and clicking the **"Calculate EMI"** button, the user will receive:

- **EMI Amount**: The monthly installment amount that needs to be paid.

- **Total Interest**: The total interest paid over the tenure of the loan.

This project uses HTML for structure, CSS for styling, and JavaScript for functionality.

---

## Features

- **Responsive Design**: The tool adapts to different screen sizes using media queries, making it suitable for both desktop and mobile devices.

- **Interactive UI**: Simple, user-friendly interface with input fields and a "Calculate EMI" button.

- **Real-time Calculation**: The EMI and total interest are updated instantly after entering the loan details.

- **Cross-browser Compatibility**: Ensures the tool works well across popular browsers like Chrome, Firefox, Safari, and Edge.

---

## Technologies Used

- **HTML**: Used for structuring the content and input fields.

- **CSS**: Styled using modern CSS techniques (Flexbox, Media Queries, and Gradients).

- **JavaScript**: Handles the logic for calculating the EMI and total interest, and dynamically updates the results on the page.

---

## How to Use

1. **Clone or download this repository to your local machine.**

   ```bash
   git clone https://github.com/yourusername/loan-emi-calculator.git
   ```

2. **Open the `index.html` file in your browser.**

3. **Enter the following details into the input fields:**

   - **Loan Amount**: The total amount of the loan.

   - **Interest Rate**: The annual rate of interest (in percentage).

   - **Loan Tenure**: The duration of the loan in years.

5. Click the "Calculate EMI" button to get the:

   - **EMI Amount**: Your monthly installment.

   - **Total Interest**: The total interest you’ll pay over the course of the loan.

6. Optionally, you can clear the input fields by refreshing the page or by clicking the "Clear" button.

---

## File Structure

```bash
/loan-emi-calculator
  ├── index.html           # HTML file containing the structure of the page
  ├── style.css            # CSS file for styling the page
  ├── app.js               # JavaScript file containing the logic for calculating EMI
  └── README.md            # This README file
```

---

## Code Explanation

### HTML (`index.html`)

This file provides the structure of the Loan **EMI calculator**. It contains the following key sections:

- **Form Inputs**:

  - **Loan Amount (₹)**: An input field for entering the loan amount.

  - **Interest Rate (%)**: An input field for entering the interest rate.

  - **Loan Tenure (Years)**: An input field for entering the loan tenure in years.

- **Result Display**:

  - Displays the **EMI Amount** and **Total Interest** after the calculation.

- **Calculate Button**:

  - When clicked, it triggers the JavaScript function to calculate and display the EMI and total interest.

---

### CSS (`style.css`)

This file contains the styles used to make the Loan EMI Calculator look attractive and user-friendly:

- **General Styling**:

  - Applied a **linear-gradient** background for a modern design.

  - Used **Flexbox** to center the content on the page both vertically and horizontally.

- **Responsive Design**:

  - **Media queries** adjust the layout for mobile devices (screen width ≤ 768px).

- **Button & Input Styling**:

  - Styled the input fields and the **"Calculate EMI"** button to ensure they look appealing and interactive.

---

### JavaScript (`app.js`)

The JavaScript file contains the logic for calculating the EMI and total interest:

- **Getting Input Values**:

  - The values entered by the user are fetched using `document.getElementById()`.

- **EMI Calculation**:

  - The formula used to calculate EMI is:

    \[
    EMI = \frac{P \times r \times (1 + r)^n}{(1 + r)^n - 1}
    \]

    Where:

    - `P` is the principal loan amount,

    - `r` is the monthly interest rate,

    - `n` is the total number of months.

- **Displaying Results**:

  - If the EMI is a valid number, it updates the `emiAmount` and `totalInterest` HTML elements with the results.

- **Event Handling**:

  - A **click event listener** is attached to the **"Calculate EMI"** button. When clicked, the `calculateEMI()` function is triggered to update the results.

---

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes. All contributions are welcome!

### Steps for Contributing:

1.  Fork this repository.

2.  Clone your fork to your local machine:

    ```bash
    git clone https://github.com/yourusername/loan-emi-calculator.git
    ```

3.  Create a new branch:

    ```bash
    git checkout -b feature/new-feature
    ```

4.  Make your changes and commit them:

    ```bash
    git commit -m "Added new feature"
    ```

5.  Push to your fork:

    ```bash
    git push origin new-feature
    ```

6.  Open a pull request to the main repository.

---

## Acknowledgements

- Inspired by many online calculators, we aimed to build a simple yet functional EMI calculator.

---

## Live Demo

You can check out a live demo of the Loan EMI Calculator here:

[Live Demo](https://loan-emis-calculator.netlify.app) 

---

## Contact

For any inquiries, suggestions, or feedback, feel free to reach out:

- **Email**: [Sudhanshu Jha](sudhanshujha164@gmail.com)

- **GitHub**: [My GitHub Profile](https://github.com/sudhanshu-j)
