async function getHolidays(cCode){
    const baseString = "https://date.nager.at/api/v3/";
    var tblHolidayList = document.getElementById("tblHolidayList");
    
    
    tblHolidayList.innerHTML = ""



    var ApiString = baseString;      
    ApiString = ApiString + "AvailableCountries";

    console.log(ApiString);
  
    var response = await fetch(ApiString);
    var jsonData = await response.json();
      
    // Build country dropdown list
    var ddlCountryList = document.getElementById("ddlCountryList");
    var countryCount = jsonData.length;
    var txtYear = document.getElementById("txtYear").value;
    var today = new Date()
    var currYear = today.getFullYear();

    if (cCode != ""){
        // FOR Loop to build dropdown list
        for (var i=0; i < countryCount; i++){
            var opt = jsonData[i].countryCode;
            var el = document.createElement("option")
            el.textContent = jsonData[i].name + " - " + jsonData[i].countryCode;
            el.value = opt
            //var selectedValue = document.getElementById(ddlCountryList).value
            //if (cCode == ""){
                 if (cCode == opt){
                     el.selected = true;                     
                     document.getElementById("txtYear").value = today.getFullYear();
                     var txtYear = document.getElementById("txtYear").value;
                     
                     }
            // // ?else if (selectedValue == opt){
            // // ?         el.selected = true;
            // // ?        }
            // // ?    }
            ddlCountryList.appendChild(el);
        }   
        // End of FOR Loop
    }


    
    
    

    else if (ddlCountryList.value == "") {
        alert("Please select a country");
        return false;
    }
    else if (txtYear == "" ) {
        alert("Please enter a year.  It must be +/- 100 years from the current year.");
        return false;
        }
    else if (currYear - txtYear < -100 || currYear - txtYear > 100) {
        alert("Please enter a year.  It must be +/- 100 years from the current year.");
        return false;
    }
    var    ApiString2 = baseString + "PublicHolidays/" + txtYear + "/" + ddlCountryList.value;
    var response2 = await fetch(ApiString2);
    var jsonData2 = await response2.json();

    var holidayCount = jsonData2.length;
    tblRow = tblHolidayList.insertRow(0);
    tblRow.insertCell(0).outerHTML = '<th style="width: 20%;">Country</th>'
    tblRow.insertCell(1).outerHTML = '<th style="width: 20%;">English Name</th>'
    tblRow.insertCell(2).outerHTML = '<th style="width: 15%;">Date</th>'
    tblRow.insertCell(3).outerHTML = '<th style="width: 15%;">Local Name</th>'
    tblRow.insertCell(4).outerHTML = '<th style="width: 10%;">Fixed Date?</th>'
    tblRow.insertCell(5).outerHTML = '<th style="width: 10%;">National</th>'
    tblRow.insertCell(6).outerHTML = '<th style="width: 10%;">Launch Year</th>'

    // FOR Loop to build holiday table 
    var row = tblHolidayList
    var englishName = "";
    var holidayDate = "";
    var localName = "";
    var fixed = "";
    var scope = "";
    var launchYear = "";
    // Insert beginning on row after header row.    
    for (var i= 0; i < holidayCount; i++){
        tblRow = tblHolidayList.insertRow(i + 1);
        countryCode = tblRow.insertCell(0); 
        englishName = tblRow.insertCell(1); 
        holidayDate = tblRow.insertCell(2); 
        localName = tblRow.insertCell(3); 
        fixed = tblRow.insertCell(4); 
        scope = tblRow.insertCell(5); 
        launchYear = tblRow.insertCell(6); 
        countryCode.innerHTML = jsonData2[i].countryCode;
        englishName.innerHTML = jsonData2[i].name;
        holidayDate.innerHTML = jsonData2[i].date
        localName.innerHTML = jsonData2[i].localName;
        fixed.innerHTML = jsonData2[i].fixed;
        scope.innerHTML = jsonData2[i].global;
        launchYear.innerHTML = jsonData2[i].launchYear;        
    }   
    // End of FOR Loop
}