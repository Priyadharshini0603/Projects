import React, { useState , useRef, useEffect } from 'react';
import './index.css';
import TodoList from './TodoList';
 import {v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos,setTodos] = useState([])
  const todoNameRef = useRef()
  //to store locally,if we refresh the added todo will not  be erased.
  useEffect(() =>{
const storedlocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
 if (storedlocal) setTodos(storedlocal)
  },[])


  useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

// function adding todo list
  function Adding(e){
    const name = todoNameRef.current.value
    if(name === '')return 
    setTodos(prevTodos =>{
      return [...prevTodos, {id:uuidv4() , name: name,complete: false}]
    })
    todoNameRef.current.value = null
  }

  //function to delete list
  function clear(){
   const newData = todos.filter(todo => !todo.complete)
   setTodos(newData)
  }

  function TrueFalse(id){
    const newData = [...todos]
    const todo = newData.find(todo => todo.id === id)
    todo.complete = !todo.complete
  
    setTodos(newData)
  }
  return(
  <>
  <h1>To-Do's  Lists</h1>
  <div className='TaskLeft'> {todos.filter(todo => !todo.complete).length} Left To-Do !</div>
  <input ref={todoNameRef} className='input' placeholder='Add New Task' type="text" />
  <br/><br/><TodoList todos={ todos } TrueFalse={TrueFalse}/>
  <button className='Addbtn' onClick={Adding}>Add To-Do Lists</button>
  <button className='Addbtn' onClick={clear}>Clear Completed To-Do's</button>
  
  </>
)
}

export default App;