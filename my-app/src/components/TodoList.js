import React, {useState} from 'react';
import TodoForm from './TodoForm'; 
import Todo from './Todo';

function TodoList() {

    const [todos,setTodos]=useState([])

    const addToDO = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos= [todos, ...todos]

        setTodos(newTodos)
    }

    const completeToDo= id=>{
        let updatedToDos = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedToDos);
    };
  return (
    <div>
        <h1>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addToDO} />
        <Todo todos={todos} completeToDo={completeToDo}/>
    </div>
  )
}

export default TodoList