const uri = 'api/todoitems';
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
    const addNameTextbox = document.getElementById('add-name');
    const addDueDateTextbox = document.getElementById('add-duedate');
    const addLocationTextbox = document.getElementById('add-location');
    const addDurationTextbox = document.getElementById('add-duration');

    const item = {
        isComplete: false,
        name: addNameTextbox.value.trim(),
        duedate: addDueDateTextbox.value.trim(),      
        location: addLocationTextbox.value.trim(),
        duration: addDurationTextbox.value.trim()
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
            addNameTextbox.value = '';
            addDueDateTextbox.value = '';
            addLocationTextbox.value = '';
            addDurationTextbox.value = '';
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

    document.getElementById('edit-name').value = item.name;
    document.getElementById('edit-duedate').value = item.dueDate;
    document.getElementById('edit-location').value = item.location;
    document.getElementById('edit-duration').value = item.duration;
    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-isComplete').checked = item.isComplete;
    document.getElementById('editForm').style.display = 'block';
    document.getElementById('edit-name').focus()
}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
        id: parseInt(itemId, 10),
        isComplete: document.getElementById('edit-isComplete').checked,
        name: document.getElementById('edit-name').value.trim(),
        duedate: document.getElementById('edit-duedate').value.trim(),
        location: document.getElementById('edit-location').value.trim(),
        duration: document.getElementById('edit-duration').value.trim()
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
    document.getElementById('add-name').focus();
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'to-do' : 'to-dos';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayItems(data) {
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
        let isCompleteCheckbox = document.createElement('input');
        isCompleteCheckbox.type = 'checkbox';
        isCompleteCheckbox.disabled = true;
        isCompleteCheckbox.checked = item.isComplete;

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        td1.appendChild(isCompleteCheckbox);

        let td2 = tr.insertCell(1);
        let textNode = document.createTextNode(item.name);
        td2.appendChild(textNode);

        // ------ New fields -----------------------------
        let td3 = tr.insertCell(2);
        let textdate = document.createTextNode(item.dueDate);
        td3.appendChild(textdate);

        let td4 = tr.insertCell(3);
        let textlocation = document.createTextNode(item.location);
        td4.appendChild(textlocation);
        
        let td5 = tr.insertCell(4);
        let textduration = document.createTextNode(item.duration);
        td5.appendChild(textduration);

        //let td3 = tr.insertCell(2);
        //td3.appendChild(editButton);
        //let td4 = tr.insertCell(3);
        //td4.appendChild(deleteButton);

        let td6 = tr.insertCell(5);
        td6.appendChild(editButton);

        let td7 = tr.insertCell(6);
        td7.appendChild(deleteButton);
        // -----------------------------------------------
    });

    todos = data;
}