function addToDoItem() {
    let newToDo: string = (<HTMLInputElement>document.getElementById("txtNewToDo")).value;
    let tblToDoList : HTMLTableElement = <HTMLTableElement>document.getElementById("tblToDoList");
    console.log("The new to-do item is:" + newToDo)
    // if (tblToDoList.rows.length > 1){
    //     document.getElementById("buttonArea").style.visibility = "visible"
    // }

    if (newToDo.length == 0){
        alert("Please enter a minimum value!");
        return false;
        }
    else {
        let tblRow : HTMLTableRowElement = tblToDoList.insertRow(0);
        let column0 : HTMLTableCellElement = tblRow.insertCell(0);    // Checkbox
        let column1 : HTMLTableCellElement = tblRow.insertCell(1);    // ToDo Item
        let column2 : HTMLTableCellElement = tblRow.insertCell(2);    // ToDo Item
        column0.innerHTML = '<input type="checkbox" name="cbIsCompleted">';
        column1.innerHTML = '<label name="lblToDoItem" >' + newToDo + '</label>';
        column2.innerHTML = '<label name="lblCompleted" ></label>';
        (<HTMLInputElement>document.getElementById("txtNewToDo")).value = ""
        document.getElementById("txtNewToDo").focus();
        }
        return true;
    }

function deleteRow(){

    if(!confirm('Are you sure you want to delete this row?')){
        return false;
    } else {
    let tblToDoList : HTMLTableElement = <HTMLTableElement>document.getElementById("tblToDoList");
    //let tblRow : HTMLTableRowElement ;
    let inputElement : HTMLInputElement;
    console.log(inputElement)
    let cellj : HTMLTableCellElement;   
    console.log(cellj);
    let i: number;

    for (i = 0; i < tblToDoList.rows.length; i++) {       
   //iterate through rows
   //rows would be accessed using the "row" variable assigned tin the for loop
        //tblRow = tblToDoList.rows[i];
        //cellj = tblRow.cells[0] ;
        cellj = tblToDoList.rows[i].cells[0]
        inputElement =<HTMLInputElement>cellj.children[0];
        if (inputElement.checked){
            tblToDoList.deleteRow(i);
        }
    }   
    return true; 
}    
}

function completeRow(){
    let tblToDoList : HTMLTableElement = <HTMLTableElement>document.getElementById("tblToDoList");
    let inputElement : HTMLInputElement;
    console.log(inputElement)
    let cellj : HTMLTableCellElement;   
    console.log(cellj);
    let i: number;

    for (i = 0; i < tblToDoList.rows.length; i++) {       
        cellj = tblToDoList.rows[i].cells[0]
        inputElement =<HTMLInputElement>cellj.children[0];
        if (inputElement.checked){
            tblToDoList.rows[i].cells[2].innerHTML = " - Is Completed"
            inputElement.checked = false;
            inputElement.hidden = true;
        }
    }
}