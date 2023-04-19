async function getForecast(){
  
    var ApiString = "https://api.weather.gov/gridpoints/";
    var theNewOffice = document.getElementById("newOffice").value;
    ApiString = ApiString + theNewOffice + "/forecast";

    console.log(ApiString);
  
    var response = await fetch(ApiString);
    var jsonData = await response.json();
  
    days=jsonData.properties.periods.length;
  
    document.getElementById("myDays").innerHTML = "";
    document.getElementById("myWeather").innerHTML = "";
    document.getElementById("myTemp").innerHTML = "";
    
    for (let i=0;i<days;i++){
      document.getElementById("myDays").innerHTML += jsonData.properties.periods[i].name + "<br><br>";
      document.getElementById("myWeather").innerHTML += jsonData.properties.periods[i].shortForecast + "<br><br>";
      document.getElementById("myTemp").innerHTML += jsonData.properties.periods[i].temperature + " degrees Farenheit" + "<br><br>";
    }

    var polygonCoords = jsonData.geometry.coordinates[0].length;
    const poinstString = "https://api.weather.gov/points/";
    var ApiString2 = poinstString;

    var cityNames = [];
    for (var i=0; i < polygonCoords; i++){
      var latit = jsonData.geometry.coordinates[0][i][1];
      var longit = jsonData.geometry.coordinates[0][i][0];

      ApiString2 = poinstString + latit + "," + longit
      console.log(ApiString2 );
      response = await fetch(ApiString2);
      var jsonData2 = await response.json();
      console.log("ApiString2=" + ApiString2 + ", jsonData.message=" +jsonData2.message);
      // if (cityNames.length > 0) {
      //   cityNames += ", ";
      // }
      cityNames.push(jsonData2.properties.relativeLocation.properties.city);
    }

    cityNames.sort();

    for (var i=0; i < cityNames.length; i++){
      if (i == 1){
        document.getElementById("cityName").innerHTML = "Forecast for  " + cityNames[i];
      }
      else if (cityNames[i] != cityNames[i-1]){
        document.getElementById("cityName").innerHTML += ", " + cityNames[i];
      }
    }
  }