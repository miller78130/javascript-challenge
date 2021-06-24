// from data.js
var tableData = data;

// YOUR CODE HERE!


var button = d3.select("#filter-btn");
var form = d3.select("#form");
var tbody = d3.select("tbody");


// Create event handlers 
button.on("click", runEnter);



function runDate() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(typeof(inputValue));

  var filteredData = tableData.filter(siting => siting.datetime === inputValue);

  console.log(filteredData);
  
filteredData.forEach(function(siting) {
    var row = tbody.append("tr");
    Object.entries(siting).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};