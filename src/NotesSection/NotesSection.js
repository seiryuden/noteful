import React from "react";
import ListNote from "../ListNote/ListNote";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import NotefulContext from "../NotefulContext";
import "./NotesSection.css";



function notesSection(props){

    return (
        <>

        <NotefulContext.Consumer>
            {(value) =>{
                 console.log(value);

                 const list = props.selectedFolder === "" ? value.notes.map((note,i) =>
                 
                 <ListNote key={i} note={note} noteId={note.id} updateSelectedNote={value.updateSelectedNote} selectedNote={value.selectedNote}/>
                 ) : value.notes.filter(note => note.folderId === value.selectedFolder).map((note,i) =>
                 <ListNote key={i} note={note} noteId={note.id} updateSelectedNote={value.updateSelectedNote} selectedNote={value.selectedNote}/>);

                return(
                <>
                {list}
                <Link className="addNoteButton" to="/addnote">Add Note</Link>  
                </>
                )
            }}
        </NotefulContext.Consumer>
        
                
       </>
        
    )    
}


export default notesSection;

notesSection.propTypes = {

    selectedFolder: PropTypes.string.isRequired,
    
}

