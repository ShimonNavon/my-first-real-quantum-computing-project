const input = document.querySelector('#number-input');
const factorButton = document.querySelector('#factor-button');
const flowInput = document.querySelector('#flow-input');
const flowResult = document.querySelector('#flow-result');
const flowEngine = document.querySelector('#flow-engine');
const message = document.querySelector('#demo-message');
const quickValues = document.querySelectorAll('[data-value]');

function findFactorPair(value) {
  if (!Number.isInteger(value) || value < 4) {
    return null;
  }

  for (let candidate = 2; candidate <= Math.sqrt(value); candidate += 1) {
    if (value % candidate === 0) {
      return [candidate, value / candidate];
    }
  }

  return [];
}

function runPrototype() {
  const value = Number(input.value);
  flowInput.textContent = Number.isFinite(value) ? String(value) : '—';
  flowEngine.textContent = 'Classical prototype';

  const factors = findFactorPair(value);

  if (factors === null) {
    flowResult.textContent = '—';
    message.textContent = 'Enter a whole number of 4 or greater.';
    return;
  }

  if (value > 9999) {
    flowResult.textContent = '—';
    message.textContent = 'Keep this educational prototype at 9,999 or below.';
    return;
  }

  if (factors.length === 0) {
    flowResult.textContent = 'Prime';
    message.textContent = `${value} has no non-trivial integer factors. Try a composite number such as 15, 21, or 35.`;
    return;
  }

  flowResult.textContent = `${factors[0]} × ${factors[1]}`;
  message.textContent = `${value} = ${factors[0]} × ${factors[1]}. This result was computed classically; the Qiskit backend comes in the next milestone.`;
}

factorButton.addEventListener('click', runPrototype);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    runPrototype();
  }
});

quickValues.forEach((button) => {
  button.addEventListener('click', () => {
    input.value = button.dataset.value;
    runPrototype();
  });
});
