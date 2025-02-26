document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('slotDataForm');
  const slotDataList = document.getElementById('slotDataList');

  const savedData = JSON.parse(localStorage.getItem('slotData')) || [];
  renderList(savedData, slotDataList);

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const game = document.getElementById('game').value;
    const result = document.getElementById('result').value;
    const data = { game, result };

    savedData.push(data);
    localStorage.setItem('slotData', JSON.stringify(savedData));
    renderList(savedData, slotDataList);

    form.reset();
  });

  function renderList(dataArray, listElement) {
    listElement.innerHTML = '';
    dataArray.forEach((data, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `Game: ${data.game}, Result: ${data.result}  
        <button onclick="editItem(${index})">Edit</button> 
        <button onclick="deleteItem(${index})">Delete</button>`;
      listElement.appendChild(listItem);
    });
  }
});

function editItem(index) {
  const savedData = JSON.parse(localStorage.getItem('slotData')) || [];
  const data = savedData[index];

  document.getElementById('game').value = data.game;
  document.getElementById('result').value = data.result;

  deleteItem(index, false);
}

function deleteItem(index, render=true) {
  const savedData = JSON.parse(localStorage.getItem('slotData')) || [];
  savedData.splice(index, 1);
  localStorage.setItem('slotData', JSON.stringify(savedData));
  if(render){
    const slotDataList = document.getElementById('slotDataList');
    renderList(savedData, slotDataList);
  }
}
