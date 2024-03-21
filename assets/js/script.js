const buttons = document.querySelectorAll('.calculator-keys button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => {
      btn.classList.remove('selected', 'pressed');
    });

    this.classList.add('pressed');

    handleCalculatorInput(this);
  });
});

function handleCalculatorInput(button) {
  const input = document.querySelector('.calculator-screen');

  if (button.classList.contains('clear')) {
    input.value = '';
  } else if (button.classList.contains('equal-sign')) {
    calculateResult(input);
  } else {
    input.value += button.value;
  }
}

function calculateResult(input) {
  try {
    input.value = eval(input.value);
  } catch (error) {
    console.error("Error in calculation:", error);
    input.value = 'Error';
  }
}
