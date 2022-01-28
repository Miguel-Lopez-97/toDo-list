import React, { useState } from 'react'
import FormTodo from './FormToDo/FormToDo';
import TaskList from './TaskList/TaskList';
import '../GeneralStyle.css'

export function Container(props) {
    const[list, setList]=useState([])
    const handleAddItem = addItem =>{
        setList([...list, addItem]);
    };
    const {name}=props;
return (
    <div key={"div"+name} className='AppDay'>
    <h1>{name}</h1>
    <FormTodo handleAddItem={handleAddItem} key={"form"+name}/>
    <TaskList list={list} setList={setList} key={"TaskList"+name} name={name}/>
    </div>
);
}