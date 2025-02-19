let input = document.querySelector("#text");
let submit = document.querySelector("#create");
let tasks = document.querySelector("#list");
let form = document.querySelector("form");
// Empty array to store the tasks
let arrayOfTasks = [];

// check if there is tasks in local storage 
if(localStorage.getItem("tasks")) {
        arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}
// get Tasks from Local Storage on load

getDateFromLocalStorage();
// Add Task
function addTaskToArray(taskText) {
        let task = {
                id : Date.now(),
                title : taskText,
                completed : false
        };
        arrayOfTasks.push(task);
        addElementsToPageFrom(arrayOfTasks);
        addTasksToLocalStorage(arrayOfTasks);
}
function addElementsToPageFrom(arrayOfTasks) {
        // Empty Tasks List 
        tasks.innerHTML = "";
        arrayOfTasks.forEach( function(task) {
                // create main li
                let li = document.createElement("li");
                li.className = "task";
                if(task.completed) {
                        li.className = "task done";
                }
                li.setAttribute("data-id", task.id);
                li.appendChild(document.createTextNode(task.title));
                // create delete icon
                let span = document.createElement("span");
                span.appendChild(document.createTextNode("x"));
                span.className = "delete";
                // append delete icon to main li
                li.appendChild(span);
                // append main li to main ul (tasks list)
                tasks.appendChild(li);
        }) 
}
function addTasksToLocalStorage(arrayOfTasks) {
        localStorage.setItem("tasks",JSON.stringify(arrayOfTasks));
}
function getDateFromLocalStorage() {
        let data = localStorage.getItem("tasks");
        if (data) {
                let tasks = JSON.parse(data);
                addElementsToPageFrom(arrayOfTasks);
        }
}
form.onsubmit = function(event) {
        event.preventDefault();
        if(input.value !== ""){
                addTaskToArray(input.value);
                input.value = ""; // Empty the Input field
        }
}

function deleteTaskWith(id) {
        arrayOfTasks = arrayOfTasks.filter(function(task) {
                return task.id != id;
        });
        addTasksToLocalStorage(arrayOfTasks);
}
function toggleTaskStatuswith (id) {
        for(let i = 0; i < arrayOfTasks.length ; i++) {
                if(arrayOfTasks[i].id == id) {
                        arrayOfTasks[i].completed == false ? arrayOfTasks[i].completed = true : arrayOfTasks[i].completed = false;
                }
        }
        addTasksToLocalStorage(arrayOfTasks);
}
// Click on the task 
tasks.addEventListener("click", function(event) {
        if(event.target.classList.contains("delete")) {
                event.target.parentElement.remove();
                deleteTaskWith(event.target.parentElement.getAttribute("data-id"));
        }
        if(event.target.classList.contains("task")) {
                toggleTaskStatuswith(event.target.getAttribute("data-id"));
                event.target.classList.toggle("done");
        }
})


