import React from 'react'

function DisplayTask() {
    const TasksList = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) :[]
    const tasksContainer =document.getElementById("tasks")
    const allTasks =()=>{
        tasksContainer.innerHTML =""

    }
    return (
        <section className='taskContainer'>
            <div className="nav">
                <button>All Tasks</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div id='tasks'>
                {TasksList.map((item,index) =>(
                    <div key={index}>
                        <label htmlFor=""><input type="checkbox" name="" id="" /> {item.task}</label>
                        <div className='taskBtn'><button>Edit</button>
                        <button>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DisplayTask
