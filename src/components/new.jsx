import React from 'react'
import { useState } from 'react'
import { FaCheck } from "react-icons/fa";  

function DisplayTask() {
  const tasksList = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) :[]

    const [editTask, setEditTask] = useState("");

  const handleChange = (e) => {
    setEditTask(e.target.value);
  };
    const edit =(id) =>{
            const saveEdit =document.getElementById("taskEdit"+id)
            const  taskEdit=document.getElementById("edit"+id)

            if(taskEdit.classList.contains("hide")){
                taskEdit.classList.remove("hide")
                taskEdit.classList.add("show")
                saveEdit.classList.remove("show")
                saveEdit.classList.add("hide")
                // document.getElementById("editBtn").innerText ="Save"
            }
            else{
                taskEdit.classList.remove("show")
                taskEdit.classList.add("hide")
                saveEdit.classList.remove("hide")
                saveEdit.classList.add("show")
                // document.getElementById("editBtn").innerText ="Edit"
            }
            // console.log(task)
    }

    // to save editing
    const saveEditt =(id)=>{
     const editedTask = tasksList.find((item) => item.id ==id)
                     console.log(editedTask)
                     if(editTask){
                      editedTask.task=editTask
                      localStorage.setItem("tasks",JSON.stringify(tasksList))
                      window.location.href="/"
                     }
                    else{
                      window.location.href="/"

                    }
    }

    
// Function to restore checkbox states on page load
// function restoreCheckboxes() {
//     const savedItems = JSON.parse(localStorage.getItem('completedTasks')) || [];
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
//     checkboxes.forEach(checkbox => {
//       const itemId = checkbox.dataset.id;
//       if (savedItems.some(item => item.id === itemId)) {
//         checkbox.checked = true;
//       }
//     });
//   }

//   // Listen for checkbox changes and update LocalStorage
//   document.addEventListener('change', (e) => {
//     if (e.target.matches('input[type="checkbox"]')) {
//       const checkbox = e.target;
//       const data = {
//         id: checkbox.dataset.id,
//         task: checkbox.dataset.task
//       };
  
  
//       if (checkbox.checked) {
//         // Add item if checked
//         if (!selectedItems.some(item => item.id === data.id)) {
//             document.getElementById(`${checkbox.dataset.id}`).classList.remove("hide")
//             document.getElementById(`${checkbox.dataset.id}`).classList.add("show")
//             // console.log(document.getElementById(`checked2`).innerText)
         
//         }
//       } else {
//         // Remove item if unchecked
//         selectedItems = selectedItems.filter(item => item.id !== data.id);
//       }
  
//       localStorage.setItem('completedTasks', JSON.stringify(selectedItems));
//     }
//   });
  
  // Call the restore function when the page loads
  // document.addEventListener('DOMContentLoaded', restoreCheckboxes);
  

    // checkbox
    //     document.addEventListener('DOMContentLoaded', () => {
      const checkbox =document.querySelectorAll("#checkIcon")
      const completedTasks =localStorage.getItem("completedTasks")?JSON.parse(localStorage.getItem("completedTasks")):[]

    const selectTask=(id)=>{
      const checking=document.getElementById("check"+id)
      const checkIcon=document.getElementById("checkIcon"+id)
      if(checkIcon.classList.contains("hide")){
        checkIcon.classList.remove("hide")
        checkIcon.classList.add("show")
        const checkedTask =tasksList.find(item=> item.id ==id)
        console.log(checkedTask)
      const completedTasks =localStorage.getItem("completedTasks")?JSON.parse(localStorage.getItem("completedTasks")):[]
      completedTasks.push(checkedTask);
      localStorage.setItem("completedTasks",JSON.stringify(completedTasks))
      }
      else{
        checkIcon.classList.remove("show")
       checkIcon.classList.add("hide")
      }
      const btnState =checkIcon.classList.contains("show");
      localStorage.setItem("btnState",btnState);
    
    }
        document.addEventListener('DOMContentLoaded', () => {
          const isBtnState =localStorage.getItem("btnState") ==="true"
          const checkbox =document.querySelectorAll(".checkIcon")

          if(isBtnState ){
          checkbox.classList.add("show")
          }
        });

        
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
    // const tasksList = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) :[]
    // to display tasks
    //   let allTask =document.getElementById("tasks")
    // const allTasks =()=>{
    //   window.location.href="/"
      
    // }

    const completedTask =()=>{ 
      let allTask =document.getElementById("tasks")
      let comTasks =document.getElementById("completedTasks")
      if(allTask.classList.contains("show")){
        allTask.classList.remove("show")
        allTask.classList.add("hide")
        comTasks.classList.remove("hide")
        comTasks.classList.add("show")
        document.getElementById("completedTaskBtn").style.border="1px solid black"
        document.getElementById("allTasksBtn").style.border="1px solid grey"
        document.getElementById("activeTaskBtn").style.border="1px solid grey"
        console.log("hi")
      }
      else{
        allTask.classList.remove("hide")
        allTask.classList.add("show")
        comTasks.classList.remove("show")
        comTasks.classList.add("hide")
      }
    }
    // const activeTasks =()=>{
    //   let activeTasks =document.getElementById("active-tasks")
    // }
    // const completedTask =()=>{
    //   let tasksContainer =document.getElementById("tasks")
    //         tasksContainer.innerHTML =""


    //     completedTasks.map((item,index) =>{
    //       tasksContainer.innerHTML +=`<div key=${index} className='task'>
    //       <label htmlFor=""><input type="checkbox" data-task=${item.task} data-id=${item.id} name="" id="" className='taskCheck' /> ${item.task}</label>
    //       <span id=${item.id} className='hide'>✔️</span>
    //       <div id=${"taskEdit"+item.id} className='hide'>
    //       <textarea name=""  cols="30" value=${editTask}  className='' onChange={handleChange}></textarea>
    //       <div  id='editingBtn' className='taskBtn' >
    //       <button id='editBtn'onClick={()=> edit (item.id)} >Cancel</button>
    //       <button onClick={() => saveEditt(item.id)}>Save</button>
    //       </div>
    //       </div>
    //       <div className='show taskBtn ' id=${'edit'+item.id}>
    //       <button  onClick={() => edit (item.id)} id='editBtn'>Edit</button>
    //       <button  onClick={ () =>deleteTask(item.id)}>Delete</button>
    //       </div>
         
    //   </div>`
    //     })
    // }
    // all tasks ddisplay
 let allTask =document.getElementById("tasks")
    const allTasks =()=>{
      window.location.href="/"
      
    }
    // delete task
    const deleteTask =(id)=>{
      const itemIndex =tasksList.findIndex((item) => item.id ==id)
      if(itemIndex == -1){
        console.log("your todo list is empty")
        console.log(itemIndex);

      }
      else{
        tasksList.splice(itemIndex,1)
        localStorage.setItem("tasks", JSON.stringify(tasksList))
        console.log(itemIndex +"how");
        window.location.href ="/"
      }
    }
    // const completedTask=localStorage.getItem("completedTasks")?JSON.stringify(localStorage.getItem("completedTasks")):[]
    return (
        <section className='taskContainer'>
            <div className="nav">
                <button onClick={allTasks} id='allTasksBtn'>All Tasks</button>
                <button id='activeTaskBtn'>Active</button>
                <button id='completedTaskBtn'
                 onClick={completedTask}
                >
                  Completed</button>
            </div>
            <div id='tasks' className='show'>
              <b>{tasksList.length} task(s) remaining</b>
                {
                tasksList.length !==0?
                tasksList.map((item,index) =>(
                    <div key={index} className='task '>
                      <div>
                        <div id={"check"+1} className='checkk' onClick={()=>selectTask(item.id)}>
                          <FaCheck id={'checkIcon'+item.id} className="checkIcon  hide"/>
                        </div>
                      </div>
                        <label htmlFor=""><input type="checkbox" data-task={item.task} data-id={item.id} name="" id="" className='taskCheck' /> {item.task}</label>
                        <span id={item.id} className='hide'>✔️</span>
                       {/* task editing */}
                        <div id={"taskEdit"+item.id} className='hide'>
                        <textarea name=""  cols="30" value={editTask}  className='' onChange={handleChange}></textarea>
                        <div  id='editingBtn' className='taskBtn' >
                        <button id='editBtn'onClick={()=> edit (item.id)} >Cancel</button>
                        <button onClick={() => saveEditt(item.id)}>Save</button>
                        </div>
                        </div>
                        <div className='show taskBtn ' id={'edit'+item.id}>
                        <button  onClick={() => edit (item.id)} id='editBtn'>Edit</button>
                        <button  onClick={ () =>deleteTask(item.id)}>Delete</button>
                        </div>
                       
                    </div>
                )):
                <div className='task '>
                  <p>No task available</p>
                </div>
              }
            </div>

            {/* active tasks */}
            <div id='active-tasks' className=' hide'>
                {
                
                tasksList.map((item,index) =>(
                    <div key={index} className='task'>
                        <label htmlFor=""><input type="checkbox" data-task={item.task} data-id={item.id} name="" id="" className='taskCheck' /> {item.task}</label>
                        <span id={item.id} className='hide'>✔️</span>
                       {/* task editing */}
                        <div id={"taskEdit"+item.id} className='hide'>
                        <textarea name=""  cols="30" value={editTask}  className='' onChange={handleChange}></textarea>
                        <div  id='editingBtn' className='taskBtn' >
                        <button id='editBtn'onClick={()=> edit (item.id)} >Cancel</button>
                        <button onClick={() => saveEditt(item.id)}>Save</button>
                        </div>
                        </div>
                        <div className='show taskBtn ' id={'edit'+item.id}>
                        <button  onClick={() => edit (item.id)} id='editBtn'>Edit</button>
                        <button  onClick={ () =>deleteTask(item.id)}>Delete</button>
                        </div>
                       
                    </div>
                ))}
            </div>
            {/* completed tasks */}
            <div id='completedTasks' className='tasks hide'>
                {
                completedTasks.length !==0?
                completedTasks.map((item,index) =>(
                    <div key={index} className='task'>
                        <label htmlFor=""><input type="checkbox" data-task={item.task} data-id={item.id} name="" id="" className='taskCheck' /> {item.task}</label>
                        <span id={item.id} className='hide'>✔️</span>
                       {/* task editing */}
                        <div id={"taskEdit"+item.id} className='hide'>
                        <textarea name=""  cols="30" value={editTask}  className='' onChange={handleChange}></textarea>
                        <div  id='editingBtn' className='taskBtn' >
                        <button id='editBtn'onClick={()=> edit (item.id)} >Cancel</button>
                        <button onClick={() => saveEditt(item.id)}>Save</button>
                        </div>
                        </div>
                        <div className='show taskBtn ' id={'edit'+item.id}>
                        <button  onClick={() => edit (item.id)} id='editBtn'>Edit</button>
                        <button  onClick={ () =>deleteTask(item.id)}>Delete</button>
                        </div>
                       
                    </div>
                )):
                <div className='task '>
                  <p>No completed task available</p>
                </div>
              }
            </div>
        </section>
    )


    completedTask()

}
export default DisplayTask
