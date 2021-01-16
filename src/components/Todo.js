import React, {useState, useEffect, useRef} from 'react';
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit,
        setEdit] = useState({id: null, value: ''});

    const submitUpdate = value => {
        updateTodo(edit.id, value) //old id with new value
        setEdit({id: null, value: ''}) //after editing our obj set to null
    }

    if (edit.id) { //after setting a new value to edit, edit id will be set too
        return <TodoForm edit={edit} onSubmit={submitUpdate}/> //a new value will be set for that object(the ids are the same)
    }

    return todos.map((todo, index) => (
        <div
            key={index}
            className={todo.isComplete
            ? 'todo-row complete'
            : 'todo-row'}>
            <div
                key={todo.id}
                onClick={() => {
                completeTodo(todo.id)
            }}>{todo.text}</div>
            <div className="icons">
                <RiCloseCircleLine className="delete-icon" onClick={() => removeTodo(todo.id)}/>
                <TiEdit
                    className="edit-icon"
                    onClick={() => setEdit({id: todo.id, value: todo.text})}/>

            </div>
        </div>
    ));
}

export default Todo
