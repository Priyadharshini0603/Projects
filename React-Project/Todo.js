import React from 'react'

export default function Todosec ({todo,TrueFalse}) {
    function TickClick(){
    TrueFalse(todo.id)
    }
    return (
        <div>
            <label>
                <input  className='checkbox'type="checkbox" checked={todo.complete} onChange = {TickClick}></input>
                {todo.name}
            </label>
        </div>
    )}