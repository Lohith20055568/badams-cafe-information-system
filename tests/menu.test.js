let menu = [];

// Add
function addItem(name) {
  menu.push({ id: 1, name});
}

// Edit
function editItem(name) {
  menu[0].name = name;
}

// Delete

function deleteItem() {
  menu = [];
}

//Tests
addItem("Mocha");
console.log(menu.length == 1 ? "Add PASS" : "Add FAIL").
  
editItem("Latte");
console.log(menu[0].name == "Latte" ? "Edit PASS" : "Ed. 

deleteItem();
console.log(menu.length == 0 ? "Delete PASS" : "Delete FAIL");
