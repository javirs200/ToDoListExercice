import React from 'react'
import { useState } from 'react'
import Item from './Item';
import data from '../assets/data.json'
import { v4 as uuidv4 } from "uuid";
import './TodoList.css'

function TodoList() {

    const initialTasks = data

    const [tasks, setList] = useState(initialTasks)

    const [hasText, setHasText] = useState(false)


    const handleSubmit = (e) => {

        e.preventDefault();

        createAndAppendItem(e.target.task.value)

        // clear imput
        e.target.task.value = ''

        setHasText(false)

    }

    const createAndAppendItem = (taskName) => {
        setList([...tasks, { taskName, deleteItem }]);
    }

    const clearList = () => {
        setList([])
    }

    const resetList = () => {
        setList(initialTasks)
    }

    const deleteItem = (i) => {
        setList(tasks.filter((_, j) => i !== j));
    };


    const drawList = () => {
        return tasks.map((el, i) => <Item key={uuidv4()} taskName={el.taskName} deleteItem={() => deleteItem(i)} />)
    }

    const handleChange = (e) => {
        e.target.value.length > 0 ? setHasText(true) : setHasText(false)
    }

    return (
        <section className='content'>
            <section className='controls'>
                <h1>TodoList</h1>
                <form className='miForm' onSubmit={handleSubmit}>
                    <label htmlFor='task'>Nombre de la Tarea :  </label>
                    <input onChange={handleChange} type="text" name="task" id="task" placeholder='todo' />
                    <br />
                    {hasText && <button type="submit">Añadir</button>}
                </form>
                <br />
                <button onClick={resetList}>Reiniciar</button>
                <button onClick={clearList}>Despejar</button>
                <br />
            </section>
            <section className='itemList'>
                <ul className='lista'>
                    <h2>Tareas</h2>
                    {drawList()}
                </ul>
            </section>
        </section>
    )
}

export default TodoList