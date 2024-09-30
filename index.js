let body = document.querySelector("body");
let container = document.querySelector("#container");
let input = document.querySelector("#input");
let addbutton = document.querySelector("#addbutton");
let ul = document.querySelector("#ul");



let tasks = JSON.parse(localStorage.getItem("task"));

function renderTasks(){
    tasks.forEach(task => {
        let li = document.createElement("li");
        ul.prepend(li);
        li.innerText = task;
        
        let delbtn = document.createElement("button");
        li.append(delbtn);
        delbtn.innerText = "Delete";
        delbtn.style.background = "Black";
        delbtn.style.color = "white";
        delbtn.style.borderStyle = "none";
        delbtn.style.padding = "2px 4px 2px 4px";
        delbtn.style.borderRadius = "3px";

      
        delbtn.addEventListener("click", () => {
            li.remove();
            let index = tasks.indexOf(task);
            tasks.splice(index, 1); 
            localStorage.setItem("task", JSON.stringify(tasks));
            
        });
    });
   
}



document.addEventListener("DOMContentLoaded", renderTasks);

addbutton.addEventListener("click", () => {
    if (input.value !== "") {
        let value = input.value;
        let li = document.createElement("li");
        ul.prepend(li);
        li.innerText = value;
        tasks.push(value);
        localStorage.setItem("task", JSON.stringify(tasks)); 

        let delbtn = document.createElement("button");
        li.append(delbtn);
        delbtn.innerText = "Delete";
        delbtn.style.background = "Black";
        delbtn.style.color = "white";
        delbtn.style.borderStyle = "none";
        delbtn.style.padding = "2px 4px 2px 4px";
        delbtn.style.borderRadius = "3px";

        // Delete task
        delbtn.addEventListener("click", () => {
            li.remove();
            let index = tasks.indexOf(value); 
            tasks.splice(index, 1); 
            localStorage.setItem("task", JSON.stringify(tasks)); 

           
        });
        input.value = "";
    } else {
        addbutton.disabled = true;
        alert("Please Add Task");
        addbutton.disabled = false;
    }
});
 
    