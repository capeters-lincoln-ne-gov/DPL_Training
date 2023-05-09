const uri = 'http://localhost:3000/api/games';
let todos = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}
function test() {
    console.log("test");
}
function addItem() {
    const addOpponentTextbox = document.getElementById('add-opponent');
    const addGameDateTextbox = document.getElementById('add-gameDate');
    const addGameTimeTextbox = document.getElementById('add-gameTime');
    const addLocationTextbox = document.getElementById('add-location');
    const addBroadcastTextbox = document.getElementById('add-broadcast');

    const item = {
        opponent: addOpponentTextbox.value.trim(),
        gameDate: addGameDateTextbox.value.trim(),      
        gameTime: addGameTimeTextbox.value.trim(),      
        location: addLocationTextbox.value.trim(),
        broadcast: addBroadcastTextbox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addOpponentTextbox.value = '';
            addGameDateTextbox.value = '';
            addGameTimeTextbox.value = '';
            addLocationTextbox.value = '';
            addBroadcastTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function deleteItem(id) {
    if (!confirm('Are you sure you want to delete this row?')) return false;

    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

function displayEditForm(id) {
    const item = todos.find(item => item.id === id);

    document.getElementById('edit-opponent').value = item.opponent;
    document.getElementById('edit-gameDate').value = item.gameDate;
    document.getElementById('edit-gameTime').value = item.gameTime;
    document.getElementById('edit-location').value = item.location;
    document.getElementById('edit-broadcast').value = item.broadcast;
    document.getElementById('edit-id').value = item.id;
    document.getElementById('editForm').style.display = 'block';
    document.getElementById('edit-opponent').focus()
}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
        opponent: document.getElementById('edit-opponent').value.trim(),
        gameDate: document.getElementById('edit-gameDate').value.trim(),
        gameTime: document.getElementById('edit-gameTime').value.trim(),
        location: document.getElementById('edit-location').value.trim(),
        broadcast: document.getElementById('edit-broadcast').value.trim()
    };

    fetch(`${uri}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    closeInput();

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
    document.getElementById('add-opponent').focus();
}

function _displayCount(itemCount) {
    const game = (itemCount === 1) ? 'game' : 'games';

    document.getElementById('counter').innerText = `${itemCount} ${game}`;
}

function _displayItems(data) {
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);
        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textOpponent = document.createTextNode(item.opponent);
        td1.appendChild(textOpponent);

        let td2 = tr.insertCell(1);
        let textgameDate = document.createTextNode(item.gameDate);
        td2.appendChild(textgameDate);

        let td3 = tr.insertCell(2);
        let textgameTime = document.createTextNode(item.gameTime);
        td3.appendChild(textgameTime);
        
        let td4 = tr.insertCell(3);
        let textlocation = document.createTextNode(item.location);
        td4.appendChild(textlocation);

        let td5 = tr.insertCell(4);
        let textbroadcast = document.createTextNode(item.broadcast);
        td5.appendChild(textbroadcast);

        let td6 = tr.insertCell(5);
        td6.appendChild(editButton);

        let td7 = tr.insertCell(6);
        td7.appendChild(deleteButton);

    });

    todos = data;
}