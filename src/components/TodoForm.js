import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input,
        setInput] = useState(props.edit
        ? props.edit.value
        : '');

    const inputref = useRef(null); //to access a mutable element in DOM we use ref

    useEffect(() => {
        inputref
            .current
            .focus();

    })
    const handleChangeInput = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');

    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? ( 
        <>
        <input
                type="text"
                name="text"
                value={input}
                className="todo-input edit"
                placeholder="مورد خود را به روز کنید ..."
                onChange={handleChangeInput}
                ref={inputref}/>
            <button className="todo-button edit">به روز رسانی</button>
            </>
            ):(
                <>
                <input
                type="text"
                name="text"
                value={input}
                className="todo-input"
                placeholder="کاری را اضافه کنید ..."
                onChange={handleChangeInput}
                ref={inputref}/>
            <button className="todo-button">افزودن</button>
            </>
            )}
           
        </form>
    )
}

export default TodoForm
//ref make its DOM node selectable by being the key in the parent