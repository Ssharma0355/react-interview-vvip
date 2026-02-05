import React, { useState } from 'react'

const PracticeTodo = () => {
    const [value, setValue] = useState("");
    const [todoList, setTodoList] = useState([]);

    const AddTask=()=>{
        const item = {
            id:todoList.length+1,
            text:value,
            completed:false
        }
        setTodoList(prev => [...prev,item]);
        setValue("")

    }
    const checkList=(id)=>{
        setTodoList(todoList.map(t=>{
            if(t.id == id){
                return{
                    ...t,
                    completed: !t.completed
                }
            }
        }))
    }

    const deleteTask=(id)=>{
        setTodoList(todoList.filter(t=> {
            if(t.id != id){
                return{
                 ...t
                }
            }
        }))
    }
    
  return (
    <div>
        <input type='text' value={value} onChange={(e)=> setValue(e.target.value)}/>
        <button onClick={()=> AddTask()}>Add Task</button>
        <ul>
            {todoList.map(t=>
                <li key={t.id}>
                <input type='checkbox' onClick={()=>checkList(t.id)} />
                <span >{t.text} </span>  
                <button onClick={()=> deleteTask(t.id)}>Delete</button>
                </li>)}
        </ul>
      
    </div>
  )
}

export default PracticeTodo
