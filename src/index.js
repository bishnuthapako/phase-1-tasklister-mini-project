document.addEventListener("DOMContentLoaded", () => {
  // your code here
 document.querySelector("form").addEventListener("submit", (e) =>{
   e.preventDefault()
   handletodos(e.target.querySelector("#new-task-description").value)
 })

});


function handletodos(todos){
  let tasks = document.getElementById("tasks");
  console.log(tasks);
  const li = document.createElement("li");
  li.textContent = todos;
  tasks.appendChild(li)
}

