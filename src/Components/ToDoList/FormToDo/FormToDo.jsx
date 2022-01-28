import React, { useState } from "react";

const FormTodo = (props) => {
    const {handleAddItem} = props;
    const [description, setDescription] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();
        handleAddItem({
            done:false,
            id:(+new Date()).toString(),
            description});
        setDescription("");
    }

    return (
        <div className="todo-list">
            <form onSubmit={handleSubmit}>
            <div className="file-input">
                <input
                    type="text"
                    className="text"
                    placeholder='Task...'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button
                    className="button add"
                    disabled={description ? "" : "disabled"}
                >
                    Add
                </button>
            </div>
            </form>
        </div>);
};
export default FormTodo;