import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_FORM_STATE = {
    todoItem:""
};

const TodoForm = ({addTodo}) => {
    const [form,setForm] = useState(INITIAL_FORM_STATE);

    function handleSubmit(e){
        e.preventDefault();
        addTodo({...form,id:uuid()});
        setForm(INITIAL_FORM_STATE);
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setForm(formData => ({ ...formData, [name]: value }));
    }
    
    return (
        <div>
            <h1>Your Stuff to do</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todoItem">Todo Item</label>
                <input 
                name="todoItem" 
                type="text" 
                onChange={handleChange}
                id="todoItem"
                value={form.todoItem}
                />

                <button>Make a todo</button>
            </form>
        </div>
    )
    
}

export default TodoForm;