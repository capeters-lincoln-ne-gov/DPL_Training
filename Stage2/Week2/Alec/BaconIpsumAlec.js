async function getBaconipsum() {
  // first build the API call string by starting with the URL
  var apiString = "https://baconipsum.com/api/";
  // next add the parameters to the string using the drop down lists
  var theNewParagraphs = document.getElementById("newParagraphs").value;
  var theMeatType = "";
  var rblValue = document.getElementsByName("rbMeatType");
//  var value= document.getElementsByName('contact');
  for (var radio of rblValue){
  if (radio.checked) {    
    theMeatType = radio.value;                      }
   }
  
  



  //apiString = apiString + "?type=all-meat&paras=" + theNewParagraphs;
  apiString = apiString + "?type=" + theMeatType + "&paras=" + theNewParagraphs;
  console.log(apiString);  // show the API string

  // now make the API call to the web service using the string and store what is returned in response
  // fetch is a javascript API call.   await tells javascript to wait until you get the response  from the API
  //   before continuing.  
  var response = await fetch(apiString);

  // finally, print the response in the various formats
  document.getElementById("myRawData").innerHTML = "";   // clear what was previously shown
  document.getElementById("myFormattedData").innerHTML = "";   // clear what was previously shown

// response.json may take time, thus the await.  
  var jsonData = await response.json();  // read the response as JSON
  
// stringify converts a json object to a string.   
  // stringify and print out the JSON object in the RawData section
  document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);
 
  // loop through the JSON object one paragraph at a time and print each in the FormattedData section
  for (var para in jsonData) {   
      document.getElementById("myFormattedData").innerHTML += "<p>" + jsonData[para] + "</p>";
    }

  return true;
}

