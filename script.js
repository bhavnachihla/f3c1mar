const countDisplay = document.getElementById('count');
const errorDisplay = document.getElementById('error');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const clearButton = document.getElementById('clear');

let count = 0;

function updateCounter() {
    countDisplay.textContent = count;
    if (count === 0) {
        errorDisplay.style.display = 'block';
        decrementButton.disabled = true;
        clearButton.style.display = 'none';
    } else {
        errorDisplay.style.display = 'none';
        decrementButton.disabled = false;
        clearButton.style.display = 'block';
    }
}

incrementButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

clearButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

updateCounter();