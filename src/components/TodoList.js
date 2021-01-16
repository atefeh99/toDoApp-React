import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos,
        setTodos] = useState([])

    //if todo was not empty it will add to newtodos then set newtodos as new array
    const addtodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {/* text is empty or contain only whitespaces */
            return;
        }
        const newtodos = [
            todo, ...todos
        ];
        setTodos(newtodos)
        console.log(todo, ...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {/* text is empty or contain only whitespaces */
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId
            ? newValue
            : item))) //prev is the last updated of todos.if such an obj exist its value will be changed
    }

    const removeTodo = id => {
        let removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });

        setTodos(updatedTodos);

    };
    return (
        <div>
            <h1>مدیریت کارها</h1>
            <TodoForm onSubmit={addtodo}/>
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList
