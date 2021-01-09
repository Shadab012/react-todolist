import React from 'react';
import './App.css';

const ToDoList = (props) =>{

    
    return(
        <>
        <div className="todo-style">
        <i class="fa fa-times" area-hidden="true" onClick={
            ()=>{
                props.onSelect(props.id);
            }
        }></i>
        <li> {props.text} </li>
        </div>
        </>
    ) 
}

export default ToDoList;