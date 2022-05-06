import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({todos, completeToDo}) {

    const [edit, setEdit] =useState({
        id: null,
        value: ''
    })


  return todos.map((todo,index) => (
        <div className={todo.isComplete ? 'todoRow Complete' : 'todoRow'} key={index}>
            <div key={todo.id} onClick={() => completeToDo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCLoseCircleLine />
                <TiEdit />
            </div>
        </div>
  ));
}

export default Todo