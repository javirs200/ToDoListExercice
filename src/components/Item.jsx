import React from 'react'
import './Item.css'

function Item({ taskName, deleteItem }) {
    return (
        <li className='item'>
            <article>
                <h3>{taskName}</h3>
                <button className='deleteBtn' onClick={deleteItem}>Borrar</button>
            </article>
        </li>
    )
}

export default Item