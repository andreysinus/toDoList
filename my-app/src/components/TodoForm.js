import React, { useState } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('')

    const handleChange= e =>{
       setInput(e.target.value); 
    };

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
             id: Math.floor(Math.random()*10000),
             text: input
         })
        setInput('');
    };

    return ( 
        <form className = 'ToDoForm' onSubmit={handleSubmit}>
            <input 
                type = 'text'
                placeholder = 'Add new task'
                value = {input}
                name = 'text'
                className = 'ToDoInput'
                onChange={handleChange}
            />
            <button className='ToDoButton'>Add task</button>
        </form>
    )
}

export default TodoForm