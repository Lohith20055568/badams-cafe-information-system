let menu = [];

// Add
function addItem(name) {
  menu.push({ id: 1, name});
}

// Edit
function editItem(name) {
  menu[0].name = name;
}
