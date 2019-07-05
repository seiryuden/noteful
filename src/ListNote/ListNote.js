import React from "react";
import {Link} from "react-router-dom";
import "./ListNote.css";
import Delete from "../Delete/Delete";

function ListNote(props){
    
    
    function clickOnNote(){

        props.updateSelectedNote(props.note);

    }

    

    return(
        <div className="listNote">
            <Link to={`/note/${props.noteId}`} onClick={() => clickOnNote()}><h2>{props.note.name}</h2></Link>
            <p>{props.note.modified}</p>
            {props.deleteButton === "no" ? null : <Delete noteId={props.noteId}/>}
        </div>
    )


}

export default ListNote;


