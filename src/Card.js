import React from 'react';
import './Card.css';
import List from "./List";

export default function Card(props) {
    List.defaultProps = {
        onDeleteCard: () => {},
    }
    return (
        <div className='Card'>
            <button
                type='button'
                onClick={() => props.onDeleteCard(props.id)}
            >
                delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}