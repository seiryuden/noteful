import React from "react";
import ListNote from "../ListNote/ListNote";
import NotefulContext from "../NotefulContext";



function Note(){

    

    return(

        <NotefulContext.Consumer>
            {(value) => 
                {return(

                <div className="note">
                <ListNote note={value.selectedNote} deleteButton="no"/>
                    
                <p>{value.selectedNote.content}</p>            

                </div>
                
            )}
            }
            
        </NotefulContext.Consumer>
    )
}

export default Note;



