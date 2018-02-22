// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredufo  to data initially
var filteredUfo = dataSet;

// renderTable renders the filteredufo **es to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredUfo.length; i++) {
    // Get the current ufo ** object and its fields
    var ufo = filteredUfo[i];
    var fields = Object.keys(ufo);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the ufo ** object, create a new cell at set its inner text to be the current value at the current ufo **'s field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace
  var filterdate = $dateInput.value.trim();

  // Set filteredufo to an array of all ufos whose "date" matches the filter
  filteredUfo = dataSet.filter(function(ufo) {
    var ufoDate = ufo.datetime.substring(0, filterdate.length);

    // If true, add the ufo ** to the filteredufo, otherwise don't add it to filteredufo **es
    return ufoDate === filterdate;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
