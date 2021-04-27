import React, { useState } from 'react'

const Todo = () => {
    const [task, updateTask] = useState('') //hook, criando um state que chama "task" que o valor inicial é ""
    const [tasks, updateTasks] = useState([])

    const handleInputChange = event => updateTask(event.target.value)

    const handleFormSubmit = event => {
        event.preventDefault()
        if (task.trim()) {            
            updateTasks([...tasks, task]) //um array que vai ser todas as tasks + 1 nova tarefa
            updateTask('')
        }        
    }
    return (
        <> 
        <form onSubmit = {handleFormSubmit}>
            <input 
                data-testid=""
                onChange = {handleInputChange}
                placeholder = "Type a new task here"
                typr = "text"
                value = {task}
            />
            <button type = "submit">Add new task</button>            
        </form>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                { tasks.map((t, index) => (
                    <tr key = {index} >
                        <td>{t}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )    

}

export default Todo