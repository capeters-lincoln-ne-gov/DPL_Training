const uri = 'api/teamrosteritems';
let rostermembers = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function addItem() {
    const addFirstNameTextbox = document.getElementById('add-firstname');
    const addLastNameTextbox = document.getElementById('add-lastname');
    const addHeightTextbox = document.getElementById('add-height');
    const addWeightTextbox = document.getElementById('add-weight');
    const addEligYearTextbox = document.getElementById('add-eligyear');
    const addPositionTextbox = document.getElementById('add-position');

    const item = {
        firstName: addFirstNameTextbox.value.trim(),
        lastName: addLastNameTextbox.value.trim(),
        height: addHeightTextbox.value.trim(),
        weight: addWeightTextbox.value.trim(),
        eligYear: addEligYearTextbox.value.trim(),
        position: addPositionTextbox.value.trim()
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
            addFirstNameTextbox.value = '';
            addLastNameTextbox.value = '';
            addHeightTextbox.value = '';
            addWeightTextbox.value = '';
            addEligYearTextbox.value = '';
            addPositionTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function deleteItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

function displayEditForm(id) {
    const item = rostermembers.find(item => item.id === id);

    document.getElementById('edit-firstname').value = item.firstName;
    document.getElementById('edit-lastname').value = item.lastName;
    document.getElementById('edit-height').value = item.height;
    document.getElementById('edit-weight').value = item.weight;
    document.getElementById('edit-eligyear').value = item.eligYear;
    document.getElementById('edit-position').value = item.position;
    document.getElementById('edit-id').value = item.id;
    document.getElementById('editForm').style.display = 'block';
}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
        id: parseInt(itemId, 10),
        firstName: document.getElementById('edit-firstname').value.trim(),
        lastName: document.getElementById('edit-lastname').value.trim(),
        height: document.getElementById('edit-height').value.trim(),
        weight: document.getElementById('edit-weight').value.trim(),
        eligYear: document.getElementById('edit-eligyear').value.trim(),
        position: document.getElementById('edit-position').value.trim()
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
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'member' : 'members';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayItems(data) {
    const tBody = document.getElementById('teammembers');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
        //let isCompleteCheckbox = document.createElement('input');
        //isCompleteCheckbox.type = 'checkbox';
        //isCompleteCheckbox.disabled = true;
        //isCompleteCheckbox.checked = item.isComplete;

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

        let tr = tBody.insertRow();

        //let td1 = tr.insertCell(0);
        //td1.appendChild(isCompleteCheckbox);

        let td1 = tr.insertCell(0);
        let textFName = document.createTextNode(item.firstName);
        td1.appendChild(textFName);

        let td2 = tr.insertCell(1);
        let textLName = document.createTextNode(item.lastName);
        td2.appendChild(textLName);

        let td3 = tr.insertCell(2);
        let textHeight = document.createTextNode(item.height);
        td3.appendChild(textHeight);

        let td4 = tr.insertCell(3);
        let textWeight = document.createTextNode(item.weight);
        td4.appendChild(textWeight);

        let td5 = tr.insertCell(4);
        let textEligYear = document.createTextNode(item.eligYear);
        td5.appendChild(textEligYear);

        let td6 = tr.insertCell(5);
        let textPosition = document.createTextNode(item.position);
        td6.appendChild(textPosition);

        let td7 = tr.insertCell(6);
        td7.appendChild(editButton);

        let td8 = tr.insertCell(7);
        td8.appendChild(deleteButton);
    });

    rostermembers = data;
}