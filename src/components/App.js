import React, { useState } from "react";
import Heading from "./Heading"
import Note from "./Note"
import Footer from "./Footer"
import CreateNote from "./CreateNote"

function App(){

    const [items, setItems] = useState([]);
    
    function addNote(item) {
        setItems(prevValue => {
            return [...prevValue, item];
        })
    }

    function deleteItem(id) {
        setItems((prevValue) => {
            return prevValue.filter((items, index) => {
                return index !== id;
            }
        )})
    }

    return (
        <div>
            <Heading />

            <CreateNote 
                onAdd={addNote}
            />

            {items.map((note, index) => (
                <Note  
                    key = {index}
                    id={index}
                    title = {note.title}
                    content = {note.content}
                    onDelete={deleteItem}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;