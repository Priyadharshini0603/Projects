import React from 'react';
 import Todosec from './Todo'


export default function TodoList({ todos , TrueFalse}) {
    return (
    
      todos.map(todosec => {
         return <Todosec key={todosec.id} TrueFalse = {TrueFalse} todo={todosec} />
     })

      
    
    )
}
