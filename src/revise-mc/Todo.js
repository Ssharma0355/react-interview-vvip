import React, { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTask = () =>{
        const items = {
            id:Date.now(),
            value:task,
        }
        setTodoList(prev =>[...prev, items]);
        setTask("")
    }

    const deleteTask=(id)=>{
        const filteredItem = todoList.filter((item)=> id !== item.id);
        setTodoList(filteredItem)

    }

  return (
    <div>
        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
        <div>
            {todoList.map((t)=>(
                <li key={t.id}>{t.value}
                <button onClick={()=> deleteTask(t.id)}>Delete</button>
                </li>
            ))}
        </div>
      
    </div>
  )
}

export default Todo
