import React, { useState } from 'react'
import "./todo.css"

const TodoList = () => {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const AddTodo =()=>{
        const item ={
            id:todoList.length+1,
            text:input,
            completed:false
        }
        setTodoList(prev => [...prev, item])
        setInput("")
    }
    const handleCheck=(id)=>{
        setTodoList(
            todoList.map(t =>{
                if(id === t.id){
                    return{
                        ...t,
                        completed: !t.completed,
                    }
                }
                else return t
            })
        )
    }
    const deleteTask=(id)=>{
        setTodoList(todoList.filter(t=>{
            if(t.id != id){
                return {
                    ...t
                }
            }
        }))
    }

  return (
    <div>
        <input type='text'
        placeholder='Enter todo' 
        value={input}
        onChange={(e)=>setInput(e.target.value)}/>
        

        <button onClick={AddTodo}>Add Todo</button>
        <ul>
            {todoList.map( t=>
                <li key={t.id}>
                    <input type='checkbox' onClick={()=>handleCheck(t.id)} ></input>
                    <span className={t.completed ? "checked":""}>{t.text}</span>
                    <button onClick={()=>deleteTask(t.id)}>Delete</button>
                </li>
                )}
        </ul>
    </div>
  )
}

export default TodoList
