document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('slotDataForm');
  const slotDataList = document.getElementById('slotDataList');

  // Load saved data from local storage
  const savedData = JSON.parse(localStorage.getItem('slotData')) || [];
  savedData.forEach(data => {
    const listItem = document.createElement('li');
    listItem.textContent = `Game: ${data.game}, Result: ${data.result}`;
    slotDataList.appendChild(listItem);
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const game = document.getElementById('game').value;
    const result = document.getElementById('result').value;

    const listItem = document.createElement('li');
    listItem.textContent = `Game: ${game}, Result: ${result}`;
    slotDataList.appendChild(listItem);

    // Save data to local storage
    savedData.push({ game, result });
    localStorage.setItem('slotData', JSON.stringify(savedData));
    
    // Clear form fields
    form.reset();
  });
});
