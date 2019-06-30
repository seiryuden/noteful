import React from "react";
import ListNote from "../ListNote/ListNote";
import Note from "../Note/Note";
import NotefulContext from "../NotefulContext";



function notesSection(props){

    return (
        <NotefulContext.Consumer>
            {(value) =>{
                 console.log(value);

                 const list = props.selectedFolder === "" ? value.notes.map((note,i) =>
                 
                 <ListNote key={i} note={note} noteId={note.id} updateSelectedNote={value.updateSelectedNote} selectedNote={value.selectedNote}/>) : value.notes.filter(note => note.folderId === value.selectedFolder).map((note,i) =>
                 <ListNote key={i} note={note} noteId={note.id} updateSelectedNote={value.updateSelectedNote} selectedNote={value.selectedNote}/>);

                return(
                <div className="notesList">
                {list}
            </div>
                )
            }}
        </NotefulContext.Consumer>  
    )    
}


export default notesSection;
