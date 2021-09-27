
var Cars = [];
var Models = [];
var Fuels = [];
// var n = 1;
// var x = 0;



var brandInput = document.getElementById("Car");
var modelInput = document.getElementById("Model");
var fuelInput = document.getElementById("Fuel");

// To Show content to table ----------------



// --------------------------

var messageBox = document.getElementById("display");

function insert() {
  Cars.push((brandInput.value));
  Models.push((modelInput.value));
  Fuels.push((fuelInput.value));
  // console.log('Insert function called');
  clearAndShow();

  // ------------------

}



// ---------------- This is to check whether the id is getting here or not


var str;
element = document.getElementById('Car');
if (element != null) {
  str = element.value;
  console.log('id found')
}
else {
  str = null;
  console.log('id not found')
}



function clearAndShow() {
  // Clear our fields
  brandInput.value = "";
  modelInput.value = "";
  fuelInput.value = "";

  // Show our output

  messageBox.innerHTML = "";

  messageBox.innerHTML += "Car: " + Cars.join(", ") + "<br/>";
  messageBox.innerHTML += "Model: " + Models.join(", ") + "<br/>";
  messageBox.innerHTML += "Fuel_Type: " + Fuels.join(", ");
}