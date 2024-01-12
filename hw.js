const body = document.body
const btn = document.createElement('button')


const taskContainer = document.querySelector('#task-container')
console.log(taskContainer)

const task1 = ['Do dishes', 'Take Out Trash', 'Go over notes', 'Night routine']

task1.forEach((task) => {
    console.log(task)
    const taskLi = document.createElement('li');
    taskLi.innerText = task;
    taskContainer.appendChild(taskLi);
});

function Addtothelist(){
    var Addlist_button=$("#Addlist_button").val();
    var Addlist_button=document.createElement("div")};
    var Addlist_button="<h1 id='Addlist_button'>Active-Task</h1> <button onclick='Delete();' id='Delete_button'>Delete</button>";
    var Delete_button=document.getElementById("Delete_button");



    // const body = document.body;
    // const btn = document.createElement('button');
    // const taskContainer = document.querySelector('#task-container');
    
    // function Addtothelist() {
    //     var todo_list_value = $("#todo-list-input").val();
    //     var todo_list_div = document.createElement("div");
    
    //     todo_list_div.style.position = "relative";
    //     todo_list_div.style.height = "100px";
    //     todo_list_div.style.top = "190px";
    //     todo_list_div.style.width = "700px";
    //     todo_list_div.style.border = "2px solid #d3d3d3";
    
    //     var todo_list_1 = "<h1 id='todo-list-todo'>Todo-activity</h1> <button onclick='Delete(this);' class='Delete_button'>Delete</button>";
    
    //     var todo_list_2 = todo_list_1.replace("Todo-activity", todo_list_value);
    //     todo_list_div.innerHTML = todo_list_2;
    
    //     function Delete(element) {
    //         // Access the parent element (todo_list_div) and remove it
    //         element.parentNode.remove();
    //     }
    
    //     taskContainer.appendChild(todo_list_div);
    // }
    
    // // Assuming you want to trigger the function when the button is clicked
    // btn.textContent = 'Add to List';
    // btn.addEventListener('click', Addtothelist);
    // body.appendChild(btn);
    