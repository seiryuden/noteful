import React from "react";
import ListNote from "../ListNote/ListNote";
import Note from "../Note/Note";



function notesSection(props){
    
    console.log(props);

    const list = props.selectedFolder === "" ? props.notes.map((note,i) =>
    
    <ListNote key={i} note={note} noteId={note.id} updateSelectedNote={props.updateSelectedNote} selectedNote={props.selectedNote}/>) : props.notes.filter(note => note.folderId === props.selectedFolder).map((note,i) =>
    <ListNote key={i} note={note} noteId={note.id} updateSelectedNote={props.updateSelectedNote} selectedNote={props.selectedNote}/>);
    
    
    


    return (
        <div className="notesList">
            {list}
        </div>  
    )    
}


export default notesSection;
