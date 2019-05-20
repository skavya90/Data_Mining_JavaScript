// from data.js
var tableData = data;
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = d3.select("#filter-btn");
var $resetBtn = d3.select("#reset-btn");
// YOUR CODE HERE!
// Add an event listener to the searchButton and resetButton, call functions when clicked
//$searchBtn.addEventListener("click", handleSearchButtonClick);
var filteredData = tableData;

function renderTable() {
    if(filteredData.length > 0) {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
      // Get get the current sighting object and its fields
      var sighting = filteredData[i];
      var fields = Object.keys(sighting);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the sighting object, create a new cell at set its inner text to be the current value at the current sighting's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = sighting[field];
      }
    }
} else {
    $tbody.innerHTML = "No Data Found";
    $tbody.classList.add('tbody-result');
}

  }

 
//function handleSearchButtonClick() {
$searchBtn.on("click", function() {
    // go through search items with formatted user's search terms by removing leading and trailing whitespace
    console.log("Hi");
    var filterDate = $dateInput.value.trim();
    console.log("filtereddate",filterDate);
    if (filterDate != "") {
      filteredData = tableData.filter(function (sighting) {
        var sightingDate = sighting.datetime;
        console.log("sightingdate",sightingDate);
        return sightingDate === filterDate;
      });
    };
    var filterCity = $cityInput.value.trim().toLowerCase();
    if (filterCity != "") {
      filteredData = filteredData.filter(function (sighting) {
        var sightingCity = sighting.city;
        return sightingCity === filterCity;
    });
  };
  var filterState = $stateInput.value.trim().toLowerCase();
  if (filterState != "") {
    filteredData = filteredData.filter(function (sighting) {
      var sightingState = sighting.state;
      return sightingState === filterState;
    });
  };

  var filterCountry = $countryInput.value.trim().toLowerCase();
  if (filterCountry != "") {
    filteredData = filteredData.filter(function (sighting) {
      var sightingCountry = sighting.country;
      return sightingCountry === filterCountry;
    });
  };

  var filterShape = $shapeInput.value.trim().toLowerCase();
  if (filterShape != "") {
    filteredData = filteredData.filter(function (sighting) {
      var sightingShape = sighting.shape;
      return sightingShape === filterShape;
    });
  };
    renderTable();
})
$resetBtn.on("click", function() {
  filteredData = tableData;
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";
  renderTable();
});
renderTable();