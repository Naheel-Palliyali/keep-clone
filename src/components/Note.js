import React from "react";

let Note = (props) => 
    (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => {
                props.onDelete(props.id)
            }}
            >Delete</button>
        </div>
    );

export default Note;