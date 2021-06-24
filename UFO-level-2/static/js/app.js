// from data.js
var tableData = data;

// YOUR CODE HERE!


var button = d3.select("#filter-btn");
var form = d3.select("#form");
var tbody = d3.select("tbody");
var input = d3.select(".form_control");
var date = d3.select("#datetime");
var state = d3.select("#state")
var country = d3.select("#country");
var shape = d3.select("#shape");

// Create event handlers 
button.on("click", runShape);


function runEnter() {
    if (input === date) {
        runDate;
    }
    else if (input === state) {
        runState;
    }
    else {
        runCountry;
    }

}



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




function runState() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    var inputElement = d3.select("#state");
  
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    //console.log(typeof(inputValue));
  
    var filteredData = tableData.filter(siting => siting.state === inputValue);
  
    console.log(filteredData);
    
  filteredData.forEach(function(siting) {
      var row = tbody.append("tr");
      Object.entries(siting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
};




function runCountry() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    var inputElement = d3.select("#country");
  
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    //console.log(typeof(inputValue));
  
    var filteredData = tableData.filter(siting => siting.country === inputValue);
  
    console.log(filteredData);
    
  filteredData.forEach(function(siting) {
      var row = tbody.append("tr");
      Object.entries(siting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
   });
};


function runShape() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    var inputElement = d3.select("#shape");
  
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    //console.log(typeof(inputValue));
  
    var filteredData = tableData.filter(siting => siting.shape === inputValue);
  
    console.log(filteredData);
    
  filteredData.forEach(function(siting) {
      var row = tbody.append("tr");
      Object.entries(siting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
   });
};