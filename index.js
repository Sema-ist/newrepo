// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $searchBtn = document.querySelector('#datetime')
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredData = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var data = filteredData[i];
    var fields = Object.keys(data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}

function handleSearchButtonClick() {

  // prevent page from refreshing
  event.preventDefault();

  // filter the state input 
  var filterData = $stateInput.value.trim().toLowerCase();
  filteredData = filteredData.filter(function(data) {
    var dataState = data.state.toLowerCase();
    return dataState === filterState;
  });

    // filter the datetime input 
    var dataSet = $datetimeInput.value.trim();
    dataSet = filteredData.filter(function(data) {
      var dataDatetime = data.dataDatetime;
      return dataDatetime === filterDatetime;
    });


  var filterCity = $cityInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataData.filter(function(address) {
    var addressState = address.city.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return dataState === filterCity;
  });

  renderTable();
}

// Render the table for the first time on page load
renderTable();
