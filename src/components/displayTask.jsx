import React from 'react'
import { useState } from 'react'

function DisplayTask() {
    const taskslist = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) :[]
    const tasksContainer =document.getElementById("tasks")
    const allTasks =()=>{
        tasksContainer.innerHTML =""

    }
    const [editTask, setEditTask] = useState("");

  const handleChange = (e) => {
    setEditTask(e.target.value);
  };
  
            const saveEdit =(taskslist) =>{
                const edii=taskslist.filter((item) => item.id ==taskslist.id)
                console.log(edii)

            }
    const edit =(task,taskslist) =>{
            const taskEdit =document.getElementById("taskEdit")
            if(taskEdit.classList.contains("hide")){
                taskEdit.classList.remove("hide")
                taskEdit.classList.add("show")
                document.getElementById("editBtn").innerText ="Save"
            }
            else{
                taskEdit.classList.remove("show")
                taskEdit.classList.add("hide")
                document.getElementById("editBtn").innerText ="Edit"

            }
            console.log(task)

    }
// Function to restore checkbox states on page load
function restoreCheckboxes() {
    const savedItems = JSON.parse(localStorage.getItem('completedTasks')) || [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    checkboxes.forEach(checkbox => {
      const itemId = checkbox.dataset.id;
      if (savedItems.some(item => item.id === itemId)) {
        checkbox.checked = true;
      }
    });
  }
  
  // Listen for checkbox changes and update LocalStorage
  document.addEventListener('change', (e) => {
    if (e.target.matches('input[type="checkbox"]')) {
      const checkbox = e.target;
      const data = {
        id: checkbox.dataset.id,
        task: checkbox.dataset.task
      };
  
      let selectedItems = JSON.parse(localStorage.getItem('completedTasks')) || [];
  
      if (checkbox.checked) {
        // Add item if checked
        if (!selectedItems.some(item => item.id === data.id)) {
            document.getElementById(`${checkbox.dataset.id}`).classList.remove("hide")
            document.getElementById(`${checkbox.dataset.id}`).classList.add("show")
            // console.log(document.getElementById(`checked2`).innerText)
          selectedItems.push(data);
        }
      } else {
        // Remove item if unchecked
        selectedItems = selectedItems.filter(item => item.id !== data.id);
      }
  
      localStorage.setItem('completedTasks', JSON.stringify(selectedItems));
    }
  });
  
  // Call the restore function when the page loads
  document.addEventListener('DOMContentLoaded', restoreCheckboxes);
  

    // checkbox
//     document.addEventListener('DOMContentLoaded', () => {

//     const taskCheckboxes = document.querySelectorAll(".taskCheck");
//     taskCheckboxes.forEach(cb => {
//         cb.addEventListener("change", () => {
//             let total = 0;
//             const totalAd = []
//             let taskId = ""
//             taskCheckboxes.forEach(item => {
//                 if (item.checked) {
//                     // total += parseInt(item.getAttribute("data-price"));
//                     // let price = parseInt(item.getAttribute("data-price"));

//                     taskId = parseInt(item.getAttribute("data-id"));
//                    const compTask =taskslist.find((item) => item.id ==taskId)
//                     console.log(compTask)
//                     // let eachAddon = { selectedAddon: selectedAddon, price: price }
//                     // totalAd.push(eachAddon)
//                     localStorage.setItem("taskId", (taskId))
//                     // document.getElementById("notify").textContent = ""

//                 }
//                 // localStorage.setItem("totalAddonsPrice", total)
//                 // document.getElementById("addons-total").textContent = total
//                 // console.log(item)

//             });
//         });

//     });
// });

    return (
        <section className='taskContainer'>
            <div className="nav">
                <button>All Tasks</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div id='tasks'>
                {taskslist.map((item,index) =>(
                    <div key={index} className='task'>
                        <label htmlFor=""><input type="checkbox" data-task={item.task} data-id={item.id} name="" id="" className='taskCheck' /> {item.task}</label>
                        <span id={item.id} className='hide'>✔️</span>
                        <textarea name="" id="taskEdit" cols="30" value={editTask}  className='hide' onChange={handleChange}></textarea>
                       {/* <button taskslist={taskslist} onClick={saveEdit}>save</button> */}
                        <div className='taskBtn'>
                            <button  onClick={edit} id='editBtn'  data-taskid={item.id}>Edit</button>
                        <button>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DisplayTask
