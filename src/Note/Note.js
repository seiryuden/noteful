import React from "react";
import ListNote from "../ListNote/ListNote";
import NotefulContext from "../NotefulContext";
import "./Note.css";



function Note(){

    

    return(

        <NotefulContext.Consumer>
            {(value) => 
                {return(

                <div className="note">
                <ListNote note={value.selectedNote} deleteButton="no" link="no"/>
                    
                <p className="content">{value.selectedNote.content}</p>            

                </div>
                
            )}
            }
            
        </NotefulContext.Consumer>
    )
}

export default Note;



