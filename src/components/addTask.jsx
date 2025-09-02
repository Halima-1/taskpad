import React from 'react'
import { useState } from 'react';
const TasksList = JSON.parse(localStorage.getItem("tasks")) ||[]
function AddTask() {
    const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const toDo={}
    const addToList =()=>{
        if(task){
            toDo.task = task 
            toDo.id =TasksList.length+1
            TasksList.push(toDo)
            localStorage.setItem("tasks", JSON.stringify(TasksList))
            window.location.href="/"
        }
        else{console.log("add a task")}
    }

    return (
        <section className='container'>
            <h2>Todo App</h2>
<textarea
        value={task}
        onChange={handleChange}
        placeholder="what will you like to add to your todo list?"
        rows="5"
        cols="40"
      />
<button id="addTodo" onClick={addToList}>Add task</button>
        </section>
        
    )
}

export default AddTask
