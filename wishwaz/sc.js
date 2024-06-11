function saveInput() {
    const inputs = [];
    for (let i = 1; i <= 9; i++) {
        const inputElement = document.getElementById(`input${i}`);
        if (inputElement) {
            inputs.push(inputElement.value);
            inputElement.value = "";  // Clear the input field after saving
        }
    }

    // Save inputs to local storage
    const savedInputs = JSON.parse(localStorage.getItem('savedInputs')) || [];
    savedInputs.push(inputs);
    localStorage.setItem('savedInputs', JSON.stringify(savedInputs));

    // Update the saved inputs section
    const savedGridContainer = document.getElementById('saved-grid-container');
    const newGridItem = document.createElement('div');
    newGridItem.className = 'saved-grid-item';
    newGridItem.innerHTML = inputs.map((input, index) => `<div><strong>Input ${index + 1}:</strong> ${input}</div>`).join('');
    savedGridContainer.appendChild(newGridItem);
}

document.addEventListener("DOMContentLoaded", function() {
    const savedInputs = JSON.parse(localStorage.getItem('savedInputs')) || [];
    const savedGridContainer = document.getElementById('saved-grid-container');

    savedInputs.forEach((inputs, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'saved-grid-item';
        gridItem.innerHTML = `<h3>Saved Input Set ${index + 1}</h3>` + inputs.map((input, i) => `<div><strong>Input ${i + 1}:</strong> ${input}</div>`).join('');
        savedGridContainer.appendChild(gridItem);
    });
});