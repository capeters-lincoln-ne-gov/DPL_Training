const uri = 'api/bankaccountitems';
let entries = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function addItem() {

    
    
    currBalance = parseFloat(document.getElementById("currBalance").innerHTML);
    const addCheckNumTextbox = document.getElementById('add-checkNum');
    const addTrandDateTextbox = document.getElementById('add-tranDate');
    const addDescriptionTextbox = document.getElementById('add-description');
    const addAmountTextbox = document.getElementById('add-amount');
    const addTranTypeDropDown = document.getElementById('add-tranType');
    var tranType = addTranTypeDropDown.value.toLowerCase()
     
    if (!validateCheckNum(parseInt(addCheckNumTextbox.value), tranType )) {
        addCheckNumTextbox.className = "tdErr";
        alert("Check Numbers must be for withdrawls, and can only be non-negative whole numbers!");
        return false;
    }

    if (!validateTranDate(addTrandDateTextbox.value)) {
        addTrandDateTextbox.className = "tdErr";
        alert("Please enter a transaction date!");
        return false;
    }

    if (!validateDescription(addDescriptionTextbox.value)) {
        addDescriptionTextbox.className = "tdErr";
        alert("Please enter a description!");
        return false;
    }

    if (!validateAmount(addAmountTextbox.value, tranType, currBalance)){
        addAmountTextbox.className = "tdErr";
        alert("Please enter a non-negative amount.  Withdrawls must be for less than the current balance!");
        return false;
    }

    if (!validateTranType(addTranTypeDropDown.value)) {
            addTranTypeDropDown.className = "tdErr";
            alert("Please select a Transaction Type!");
            return false;
    }
    

    var cNum = 0;
    if (addCheckNumTextbox.value > "") {
        cNum = addCheckNumTextbox.value        
    }
    // ---------------------------------------------------------------------------------------------------------
    // *   see https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript 
    // *var ttValue = addTranTypeDropDown.value;
    // *var ttText = ttValue.options[ttValue.selectedIndex].text;
    // ---------------------------------------------------------------------------------------------------------
    const item = {
        //checkNum: addCheckNumTextbox.value,
        checkNum: cNum,
        tranDate: addTrandDateTextbox.value,
        description: addDescriptionTextbox.value.trim(),
        amount: parseFloat(addAmountTextbox.value),
        tranType: addTranTypeDropDown.value
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
            addCheckNumTextbox.value = ''
            addTrandDateTextbox.value = ''
            addDescriptionTextbox.value = ''
            addAmountTextbox.value = ''
            addTranTypeDropDown.selecteIndex = 0
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
    const item = entries.find(item => item.id === id);

    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-checkNum').value = item.checkNum
    document.getElementById('edit-tranDate').value = item.tranDate
    document.getElementById('edit-description').value = item.description
    document.getElementById('edit-amount').value = item.amount
    document.getElementById('edit-tranType').value = item.tranType
    document.getElementById('editForm').style.display = 'block';
}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
        id: parseInt(itemId, 10),
        checkNum: parseInt(document.getElementById('edit-checkNum').value),
        tranDate: document.getElementById('edit-tranDate').value.trim(),
        description: document.getElementById('edit-description').value.trim(),
        amount: document.getElementById('edit-amount').value,
        tranType: document.getElementById('edit-tranType').value.trim()

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





//============= Data Validation =======================================================
function validateCheckNum(checkNum, tranType) {
    if (parseInt(checkNum) < 0) {
        return false;
    }
    else if (tranType == "withdrawl") {
        return true;
    }
    else if (parseInt(checkNum) > 0) {
        return false;
    }
    else {
        return true;
    }
}

function validateTranDate(tranDate) {
    if (tranDate == "") {
        return false;
    }
    else {
        return true;
    }
}

function validateDescription(Description) {
    if (Description == "") {
        return false;
    }
    else {
        return true;
    }
}

function validateAmount(Amount, tranType, currBalance) {
    if (Amount == "") {
        return false;
    }
    else if (parseFloat(Amount) < 0) {
        return false;
    }
    else if (tranType == "withdrawl") {
        if (parseFloat(Amount) > parseFloat(currBalance)) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }

}

function validateTranType(tranType) {
    if (tranType == "") {
        return false;
    }
    else {
        return true;
    }
}
//========= End of Validation ===========================================================


function _displayCount(itemCount, totAmount) {
    const name = (itemCount === 1) ? 'entry' : 'entries';
    document.getElementById('counterLit').innerText = `${itemCount} ${name} - Account Balance is `;
    document.getElementById('currBalance').innerText = totAmount;
}

function _displayItems(data) {
    const tBody = document.getElementById('entries');
    tBody.innerHTML = '';

    //_displayCount(data.length);

    const button = document.createElement('button');

    var totAmount = 0;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    data.forEach(item => {
        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

        let tr = tBody.insertRow();

        let td0 = tr.insertCell(0)
        let textCheckNum = document.createTextNode(item.checkNum)
        td0.setAttribute("class", "tdOkay");
        td0.appendChild(textCheckNum)

        let td1 = tr.insertCell(1);
        let textTranDate = document.createTextNode(item.tranDate);
        td1.setAttribute("class", "tdOkay");
        td1.appendChild(textTranDate);

        let td2 = tr.insertCell(2);
        let textDescription = document.createTextNode(item.description);
        td2.setAttribute("class", "tdOkay");
        td2.appendChild(textDescription);

        let td3 = tr.insertCell(3);
        let textAmount = document.createTextNode(formatter.format(item.amount));
        /*let textAmount = formatter.format(item.amount);*/
        td3.setAttribute("class", "tdOkay");
        td3.appendChild(textAmount);
        if (item.tranType == "Withdrawl") {
            totAmount += (item.amount * -1);
        }
        else {
            totAmount += item.amount;
        }

        let td4 = tr.insertCell(4);
        let textTranType = document.createTextNode(item.tranType);
        td4.setAttribute("class", "tdOkay");
        td4.appendChild(textTranType);

        let td5 = tr.insertCell(5);
        td5.setAttribute("class", "tdOkay");
        td5.appendChild(editButton);

        let td6 = tr.insertCell(6);
        td6.setAttribute("class", "tdOkay");
        td6.appendChild(deleteButton);
    });


    /* =============== Footer Row ===================== */
    //const tFooter = document.getElementById('footer');
    //tFooter.innerHTML = '';
    //let tr = tFooter.insertRow();
    //let tf0 = tr.insertCell(0)
    //let footerCheckNum = document.createTextNode("")
    //td0.appendChild(footerCheckNum)

    //let tf1 = tr.insertCell(1)
    //let footerTranDate = document.createTextNode("")
    //td1.appendChild(footerTranDate)

    //let tf2 = tr.insertCell(2)
    //let footerDescription = document.createTextNode("")
    //td2.appendChild(footerDescription)

    //let tf3 = tr.insertCell(3);
    //let footerAmount = document.createTextNode(formatter.format(totAmount));
    ///*let textAmount = formatter.format(item.amount);*/
    //td3.appendChild(footerAmount);

    //let tf4 = tr.insertCell(4)
    //let footerDescription = document.createTextNode("")
    //td4.appendChild(footerDescription)
    //let tf5 = tr.insertCell(5)
    //let footerDescription = document.createTextNode("")
    //td5.appendChild(footerDescription)
    //let tf6 = tr.insertCell(6)
    //let footerDescription = document.createTextNode("")
    //td6.appendChild(footerDescription)
    /* =============== Footer Row ===================== */





    _displayCount(data.length, totAmount);

    entries = data;
}