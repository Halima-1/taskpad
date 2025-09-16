import React from 'react'
import {useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa";  
// import React, { useState, useEffect } from "react";

const tasksList = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) :[]
function DisplayTask() {
  // localStorage.setItem("activeItems", JSON.stringify(activeItems));

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

  // Restore from localStorage on component mount
  const [activeItems, setActiveItems] = useState([]);
 // Load completedTasks from localStorage on mount
 useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("activeItems")) || [];
  setActiveItems(saved.map(Number)); // convert to numbers
}, []);

// Save completedTasks to localStorage whenever it changes
useEffect(() => {
  localStorage.setItem("activeItems", JSON.stringify(activeItems));
}, [activeItems]);

      const completedTasks =localStorage.getItem("completedTasks")?JSON.parse(localStorage.getItem("completedTasks")):[]
// Toggle a task (add/remove from completedTasks)
const toggleTask = (id) => {
  setActiveItems((prev) =>
    prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
  );
  const activeIte = tasksList.filter(
    (task) => activeItems.includes(task.id)
  );
  const doneItems = tasksList.filter((task) =>
    !activeItems.includes(task.id)
  );
        console.log(activeIte);
              console.log(doneItems);
              localStorage.setItem("completedTasks",JSON.stringify(doneItems))
              localStorage.setItem("activeTasks",JSON.stringify(activeIte))
      let activeItemss= JSON.parse(localStorage.getItem("activeItems"))?.map(id => Number(id)) || [];
};

// Derive active and done tasks
const activeIte = tasksList.filter(
  (task) => activeItems.includes(task.id)
);
const doneItems = tasksList.filter((task) =>
  !activeItems.includes(task.id)
);
      console.log(activeIte);
            console.log(doneItems);
            localStorage.setItem("completedTasks",JSON.stringify(doneItems))
            localStorage.setItem("activeTasks",JSON.stringify(activeIte))
    let activeItemss= JSON.parse(localStorage.getItem("activeItems"))?.map(id => Number(id)) || [];

// TASKS DISPLAY
    let allTask =document.getElementById("tasks")
    let comTasks =document.getElementById("completedTasks")
    let actTask =document.getElementById("activeTasks")

// completed tasks display
    const completedTask =()=>{ 
      if(allTask.classList.contains("show") || actTask.classList.contains("show")){
        allTask.classList.remove("show")
        allTask.classList.add("hide")
        comTasks.classList.remove("hide")
        comTasks.classList.add("show")
        actTask.classList.remove("show")
        actTask.classList.add("hide")
        document.getElementById("completedTaskBtn").style.border="1px solid black"
        document.getElementById("allTasksBtn").style.border="1px solid grey"
        document.getElementById("activeTaskBtn").style.border="1px solid grey"
        console.log("hi")
      }
    }
    
    // all tasks ddisplay
    const allTasks =()=>{
      if(allTask.classList.contains("hide")){
        allTask.classList.remove("hide")
        allTask.classList.add("show")
        comTasks.classList.remove("show")
        comTasks.classList.add("hide")
        actTask.classList.remove("show")
        actTask.classList.add("hide")
        document.getElementById("completedTaskBtn").style.border="1px solid grey"
        document.getElementById("allTasksBtn").style.border="1px solid black"
        document.getElementById("activeTaskBtn").style.border="1px solid grey"
        console.log("hi")
      }
      // window.location.href="/"
      
    }
    const activeTasks=()=>{
      let allTask =document.getElementById("tasks")
      let comTasks =document.getElementById("completedTasks")
      let actTask =document.getElementById("activeTasks")

      if(actTask.classList.contains("hide")){
        actTask.classList.remove("hide")
        actTask.classList.add("show")
        comTasks.classList.remove("show")
        comTasks.classList.add("hide")
        allTask.classList.remove("show")
        allTask.classList.add("hide")
        document.getElementById("completedTaskBtn").style.border="1px solid grey"
        document.getElementById("allTasksBtn").style.border="1px solid grey"
        document.getElementById("activeTaskBtn").style.border="1px solid black"
        console.log("hi")
      }
      // const tasksList = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) :[]
      // const activeTsk =tasksList.filter(task => !activeItemss.includes(task.id))
      console.log(activeIte);
      console.log(activeItemss);


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
    // const cpldtasksId =JSON.parse(localStorage.getItem("doneTasksId")) ||[]

    // const completedTasks=localStorage.getItem("completedTasks")?JSON.stringify(localStorage.getItem("completedTasks")):[]
    return (
        <section className='taskContainer'>
            <div className="nav">
                <button onClick={allTasks} id='allTasksBtn'>All Tasks</button>
                <button id='activeTaskBtn' onClick={activeTasks}>Active</button>
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
                       {/* onClick={()=>selectTask(item.id)} */}
                        <div id={"check"+1} className='checkk' checked={activeItems.includes(item.id)}
                onClick={() => toggleTask(item.id)}>
                          <FaCheck id={'checkIcon'+item.id} className={activeItems.includes(item.id) ? "hide" : "show"}/>
                        </div>
                      </div>
                      <span>{item.task}</span>
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
            <div id='activeTasks' className=' hide'>
            <b>{activeIte.length} task(s) remaining</b>
            {
                activeIte.length !==0?
                activeIte.map((item,index) =>(
                    <div key={index} className='task '>
                      <div>
                       {/* onClick={()=>selectTask(item.id)} */}
                        <div id={"check"+1} className='checkk' checked={activeItems.includes(item.id)}
                onClick={() => toggleTask(item.id)}>
                          <FaCheck id={'checkIcon'+item.id} className={activeItems.includes(item.id) ? "hide" : "show"}/>
                        </div>
                      </div>
                      <span>{item.task}</span>
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
                  <p>No active task available</p>
                </div>
              }
            </div>
            {/* completed tasks */}
            <div id='completedTasks' className='tasks hide'>
            <b>{completedTasks.length} task(s) done</b>
                {
                completedTasks.length !==0?
                completedTasks.map((item,index) =>(
                    <div key={index} className='task'>
                      <div>
                       {/* onClick={()=>selectTask(item.id)} */}
                        <div id={"check"+1} className='checkk' checked={activeItems.includes(item.id)}
                onClick={() => toggleTask(item.id)}>
                          <FaCheck id={'checkIcon'+item.id} className={activeItems.includes(item.id) ? "hide" : "show"}/>
                        </div>
                      </div>
                      <span>{item.task}</span>
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


    // completedTask()

}
export default DisplayTask
