function validateANDadd() {
    // place the values in the form into variables
    var theNewWord = document.forms["myForm"]["newWord"].value.toLowerCase();
    var theNewNumber = document.forms["myForm"]["newNumber"].value;
    //console.log(theNewNumber);
    // validate that something was entered as a word
    if (theNewWord == "") {
      // no word was entered so tell the user
      alert("Please enter a word to check");
      return false;
    }
    // validate that a 1 or 2 was entered as a number
    else if ((theNewNumber != 1) && (theNewNumber != 2)) {
      // a 1 or 2 was not entered as the number so tell user and clear the field
      alert("Please enter a 1 or 2 for the list.");
      document.forms["myForm"]["newNumber"].value = "";
      return false;
    }
    else {
        // a word was entered and a 1 or 2 was entered as the number 
        // so add the word to the proper table 
        if (theNewNumber==1){
           var tableRef = document.getElementById("table1");
           (tableRef.insertRow(tableRef.rows.length)).innerHTML = document.forms["myForm"]["newWord"].value + ': ' + PalindromeCheck1(theNewWord);}
        else {
           var tableRef = document.getElementById("table2");
           (tableRef.insertRow(tableRef.rows.length)).innerHTML = document.forms["myForm"]["newWord"].value + ': ' + PalindromeCheck2(theNewWord);;}
        // erase the form fields
        resetInput()
        // document.forms["myForm"]["newWord"].value = "";
        // document.forms["myForm"]["newNumber"].value = "";
        // document.forms["myForm"]["newWord"].focus();
        // document.getElementById("newNumber")
        return true;
    }
  }

  function resetInput(){
    document.forms["myForm"]["newWord"].value = "";
    document.forms["myForm"]["newWord"].focus();
    document.forms["myForm"]["newNumber"].value = "";

    var rbl = document.getElementsByName("newNumber");
    // for (i=0; i < rbl.item.length; i++){
    //   rbl.item(i).cheked = false; 
    // }
    rbl.item(0).checked = false;
    rbl.item(1).checked = false;
}
  function clearList1() {
    // clear the table of all rows
    var tableRef = document.getElementById("table1");
    tableRef.innerHTML = " ";
    document.getElementById("newWord").focus()

  }

  function clearList2() {
    // clear the table of all rows
    var tableRef = document.getElementById("table2");
    tableRef.innerHTML = " ";
    document.getElementById("newWord").focus()
  }

  function PalindromeCheck1 (theword){
    var backwordsWord = theword.split('').reverse().join('');
    return theword == backwordsWord;
    }

  function PalindromeCheck2 (theword){
    let L = theword.length - 1;
    let z = L;
    var palindromeCheck = true;
    //console.log("z=" + z);

    for (i=0; i < L; i++){
        if (i < z) {
            console.log(theword[i] + " - " + theword[z])
            if (theword[i] != theword[z]){
                palindromeCheck = false;
                console.log("failed on index #" + i)
            }
        }
        z--;
    }
    return palindromeCheck;
  }