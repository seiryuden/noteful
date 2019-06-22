import React from "react";
import ListNote from "../ListNote/ListNote";

function Note(props){

    console.log(props);


    return(

        <div className="note">
            <ListNote note={props.selectedNote}/>
                
            <p>{props.selectedNote.content}</p>            

        </div>



    )


}

export default Note;