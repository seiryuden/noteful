import React from "react";
import {Link} from "react-router-dom";
import "./ListNote.css";

function ListNote(props){
    
    
    function clickOnNote(){

        props.updateSelectedNote(props.note);

    }

    

    return(

        <Link to={`/note/${props.noteId}`} onClick={() => clickOnNote()}>
            <div className="listNote">
                <h2>{props.note.name}</h2>
                <p>{props.note.modified}</p>
            </div>

        </Link>


    )


}

export default ListNote;