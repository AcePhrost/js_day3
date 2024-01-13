const body = document.body
const btn = document.createElement('button')

function chore() {
    var item = document.getElementById('choreInput').value;
    var text = document.createTextNode(item);
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    var newItem = document.createElement("div");
    
    newItem.appendChild(checkbox);
    newItem.appendChild(text);
    document.getElementById("chore").appendChild(newItem)
  }

// function todoList() {
//     var item = document.getElementById('todoInput').value;
//     var text = document.createTextNode(item);
//     var checkbox = document.createElement('input');
//     checkbox.type = "checkbox";
//     checkbox.name = "name";
//     checkbox.value = "value";
//     var newItem = document.createElement("div");
    
//     newItem.appendChild(checkbox);
//     newItem.appendChild(text);
//     document.getElementById("todoList").appendChild(newItem)
//   }