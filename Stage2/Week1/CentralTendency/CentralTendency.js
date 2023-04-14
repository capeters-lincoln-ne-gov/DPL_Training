function validateANDadd() {
  var inMin = document.getElementById("minValue").value;
  var inMax = document.getElementById("maxValue").value;
  var inMyNumber = document.getElementById("newNumber").value
  console.log("min:" + inMin + ", max:" + inMax + ", my number:" + inMyNumber)
  if (inMin == ""){
    alert("Please enter a minimum value!")
    return false;
  }
  else if (inMax == ""){
    alert("Please enter a maximum value!")
    return false;
  }
  else if (parseInt(inMin) >= parseInt(inMax)){
    alert("The minimum value must be less than the maximum value!")
    return false;
  }
  else if (inMyNumber == ""){
    alert("The minimum value must be less than the maximum value!")
    return false;
  }
  else if (parseInt(inMyNumber) < parseInt(inMin) || parseInt(inMyNumber) > parseInt(inMax) ){
    alert("Your number must be within the range of the min and the max!")
    return false;
  }
  else {
    //  Successful data validation.  Proceed to add number to the list, then calculate Mean, Median and Mode.   
        var numberList = document.getElementById("numberList");
        (numberList.insertRow(numberList.rows.length)).innerHTML = inMyNumber;

        // ****** calculate and display the MEAN *******************
        var sum = 0;    // sum will be the sum of the numbers
        var numCount = numberList.rows.length   // count is the number of numbers in the table
        for (i = 0; i < numCount; i++){     // for each row/number in the table
          sum += parseInt(((numberList.rows[i]).innerHTML));  // add the number in the row in the table to the sum
        }
        var calcMean = sum/numCount;     // calculate mean
        var lblMean = document.getElementById("theMean");    
        lblMean.innerHTML = calcMean.toFixed(5)   // show the mean to the user
        
        // ******** determine the MEDIAN ****************************
        var numArray = [];
        for (i = 0; i < numCount; i++){     // for each row/number in the table
          numArray.push(parseInt(((numberList.rows[i]).innerHTML)));  // add the number in the row in the table to the array
        }
        const sortedArray = numArray.sort((a, b) => a - b);

        const middle = Math.floor(sortedArray.length / 2);
        console.log("middle number:" + middle)
        var lblMedian = document.getElementById("theMedian");    
    
        if (sortedArray.length % 2 === 0) {
          lblMedian.innerHTML = ((sortedArray[middle - 1] + sortedArray[middle]) / 2).toFixed(2);
        }
        else {
          lblMedian.innerHTML = sortedArray[middle]
        }    

        // ******** determine the MODE (Using Sorted array) ******************************
        console.log("sortedArray:" +sortedArray)
        var bestStreak = 1;
        var mostElem = sortedArray[0];
        var currentStreak = 1;
        var currentElem = sortedArray[0];
        for (let i = 1; i < sortedArray.length; i++) {          
          // if (i = sortedArray.length - 1 && i > 1){
          //   if (currentStreak > bestStreak) {
          //     bestStreak = currentStreak;
          //     mostElem = currentElem;
          //   }      
          // }
          // else 
          if (sortedArray[i-1] == sortedArray[i]) {
            currentStreak++;
            if (currentStreak > bestStreak) {
              bestStreak = currentStreak;
              mostElem = currentElem;
            }      
            
          }
          else {
            if (currentStreak > bestStreak) {
              bestStreak = currentStreak;
              mostElem = currentElem;
            }      
            currentStreak = 1;  //1? 
            currentElem = sortedArray[i];
        }
      }
      var lblMode = document.getElementById("theMode");    
      lblMode.innerHTML = mostElem

      // *** Lock Max and Min values, clear out the input number ********
      document.forms["myForm"]["minValue"].disabled = true;
      document.forms["myForm"]["maxValue"].disabled = true;
      document.forms["myForm"]["newNumber"].value = ""; 
      return true;
  }
}
  function clearAll() {
    // clear the table
    var tableRef = document.getElementById("numberList");
    tableRef.innerHTML = "";
    // clear the mean, median and mode labels
    var lblTheMean = document.getElementById("theMean");
    lblTheMean.innerHTML = "n/a";
    var lblTheMedian = document.getElementById("theMedian");
    lblTheMedian.innerHTML = "n/a";
    var lblTheMode = document.getElementById("theMode");
    lblTheMode.innerHTML = "n/a";
    // clear the minValue, maxValue and newNumber text boxes
    //     in the form and enable the minValue and maxValue
    document.forms["myForm"]["minValue"].value = "";
    document.forms["myForm"]["minValue"].disabled = false;
    document.forms["myForm"]["maxValue"].value = "";
    document.forms["myForm"]["maxValue"].disabled = false;
    document.forms["myForm"]["newNumber"].value = "";

  }

