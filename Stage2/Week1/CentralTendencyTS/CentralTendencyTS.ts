function validateANDadd() {
  let inMinString: string = (<HTMLInputElement>document.getElementById("minValue")).value;
  let inMaxString: string = (<HTMLInputElement>document.getElementById("maxValue")).value;
  let inMyNumberString: string = (<HTMLInputElement>document.getElementById("newNumber")).value;
  let inMin : number  
  let inMax : number;
  let inMyNumber : number;
  console.log("min:" + inMinString + ", max:" + inMaxString + ", my number:" + inMyNumberString)
  if (inMinString.length == 0){
    alert("Please enter a minimum value!");
    return false;
  }
  else {
    inMin = parseInt(inMinString)
  }

if (inMaxString.length == 0){
    alert("Please enter a maximum value!");
    return false;
  }
else {
  inMax = parseInt(inMaxString); 
}

if (inMyNumberString.length == 0){
  alert("Please  enter your number!");
  return false;
}
else {
  inMyNumber = parseInt(inMyNumberString);
}

if (inMin >= inMax){
    alert("The minimum value must be less than the maximum value!");
    return false;
  }
else if (inMyNumber < inMin || inMyNumber > inMax) {
    alert("Your number must be within the range of the min and the max!");
    return false;
  }
  else {
    //  Successful data validation.  Proceed to add number to the list, then calculate Mean, Median and Mode.   
        let numberList = <HTMLTableElement>document.getElementById("numberList");
        (numberList.insertRow(numberList.rows.length)).innerHTML = inMyNumberString;

        // ****** calculate and display the MEAN *******************
        let sum : number = 0;    // sum will be the sum of the numbers
        let numCount : number = numberList.rows.length   // count is the number of numbers in the table
        for (let i : number  = 0; i < numCount; i++){     // for each row/number in the table
          sum += parseInt(((numberList.rows[i]).innerHTML));  // add the number in the row in the table to the sum
        }
        let calcMean : number = sum/numCount;     // calculate mean
        let lblMean : HTMLElement | null = document.getElementById("theMean");    
        lblMean.innerHTML = calcMean.toFixed(5)   // show the mean to the user
        
        // ******** determine the MEDIAN ****************************
        let numArray = [];
        for (let i : number = 0; i < numCount; i++){     // for each row/number in the table
          numArray.push(parseInt(((numberList.rows[i]).innerHTML)));  // add the number in the row in the table to the array
        }
        const sortedArray : Array<number> = numArray.sort((a, b) => a - b);

        const middle : number = Math.floor(sortedArray.length / 2);
        console.log("middle number:" + middle)
        let lblMedian : HTMLElement | null = document.getElementById("theMedian");    
    
        if (sortedArray.length % 2 === 0) {
          lblMedian.innerHTML = ((sortedArray[middle - 1] + sortedArray[middle]) / 2).toFixed(2);
        }
        else {
          lblMedian.innerHTML = sortedArray[middle].toString();
        }    

        // ******** determine the MODE (Using Sorted array) ******************************
        console.log("sortedArray:" +sortedArray)
        let bestStreak : number = 1;
        let mostElem : number = sortedArray[0];
        let currentStreak : number = 1;
        let currentElem : number = sortedArray[0];
        for (let i = 1; i < sortedArray.length; i++) {          
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
      let lblMode = document.getElementById("theMode");    
      lblMode.innerHTML = mostElem.toString()

      // *** Lock Max and Min values, clear out the input number ********
      document.forms["myForm"]["minValue"].disabled = true;
      document.forms["myForm"]["maxValue"].disabled = true;
      document.forms["myForm"]["newNumber"].value = ""; 
      return true;
  }
}
  function clearAll() {
    // clear the table
    let tableRef = document.getElementById("numberList");
    tableRef.innerHTML = "";
    // clear the mean, median and mode labels
    let lblTheMean = document.getElementById("theMean");
    lblTheMean.innerHTML = "n/a";
    let lblTheMedian = document.getElementById("theMedian");
    lblTheMedian.innerHTML = "n/a";
    let lblTheMode = document.getElementById("theMode");
    lblTheMode.innerHTML = "n/a";
    // clear the minValue, maxValue and newNumber text boxes
    //     in the form and enable the minValue and maxValue
    document.forms["myForm"]["minValue"].value = "";
    document.forms["myForm"]["minValue"].disabled = false;
    document.forms["myForm"]["maxValue"].value = "";
    document.forms["myForm"]["maxValue"].disabled = false;
    document.forms["myForm"]["newNumber"].value = "";

  }

