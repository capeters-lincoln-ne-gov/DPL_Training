function addToDoItem() {
    var newToDo = document.getElementById("txtNewToDo").value;
    var tblToDoList = document.getElementById("tblToDoList");
    console.log("The new to-do item is:" + newToDo);
    // if (tblToDoList.rows.length > 1){
    //     document.getElementById("buttonArea").style.visibility = "visible"
    // }
    if (newToDo.length == 0) {
        alert("Please enter a minimum value!");
        return false;
    }
    else {
        var tblRow = tblToDoList.insertRow(0);
        var column0 = tblRow.insertCell(0); // Checkbox
        var column1 = tblRow.insertCell(1); // ToDo Item
        var column2 = tblRow.insertCell(2); // ToDo Item
        column0.innerHTML = '<input type="checkbox" name="cbIsCompleted">';
        column1.innerHTML = '<label name="lblToDoItem" >' + newToDo + '</label>';
        column2.innerHTML = '<label name="lblCompleted" ></label>';
        document.getElementById("txtNewToDo").value = "";
        document.getElementById("txtNewToDo").focus();
        //document.getElementById("txtNewToDo").select();
    }
    return true;
}
function deleteRow() {
    if (!confirm('Are you sure you want to delete this row?')) {
        return false;
    }
    else {
        var tblToDoList = document.getElementById("tblToDoList");
        //let tblRow : HTMLTableRowElement ;
        var inputElement = void 0;
        console.log(inputElement);
        var cellj = void 0;
        console.log(cellj);
        var i = void 0;
        for (i = 0; i < tblToDoList.rows.length; i++) {
            //iterate through rows
            //rows would be accessed using the "row" variable assigned tin the for loop
            //tblRow = tblToDoList.rows[i];
            //cellj = tblRow.cells[0] ;
            cellj = tblToDoList.rows[i].cells[0];
            inputElement = cellj.children[0];
            if (inputElement.checked) {
                tblToDoList.deleteRow(i);
            }
        }
        return true;
    }
}
function completeRow() {
    var tblToDoList = document.getElementById("tblToDoList");
    var inputElement;
    console.log(inputElement);
    var cellj;
    console.log(cellj);
    var i;
    for (i = 0; i < tblToDoList.rows.length; i++) {
        cellj = tblToDoList.rows[i].cells[0];
        inputElement = cellj.children[0];
        if (inputElement.checked) {
            tblToDoList.rows[i].cells[2].innerHTML = " - Is Completed";
            inputElement.checked = false;
            inputElement.hidden = true;
        }
    }
}
//# sourceMappingURL=AddUpdateDel.js.map