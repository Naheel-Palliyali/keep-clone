import React, { useState } from "react";

function CreateNote(props) {

    const [isClicked, setIsCLicked] = useState(false);

    const [item, setItem] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        return setItem(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(item);
        event.preventDefault();
        setItem({
            title: "",
            content: ""
        });
    }

    function isCLicked() {
        setIsCLicked(!isClicked);
    }

    return (
        <form onSubmit={props.onClick}>
            <input 
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={item.title}
                onFocus={isCLicked}
            />
            {isClicked && <textarea
                name="content"
                placeholder="Make a note"
                onChange={handleChange}
                value={item.content}
            />}
            <button onClick={submitNote}>Add</button>
        </form>
    );
}

export default CreateNote;