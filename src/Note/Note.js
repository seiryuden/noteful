import React from "react";
import ListNote from "../ListNote/ListNote";
import NotefulContext from "../NotefulContext";

function Note(props){

    console.log(props);
    

    return(

        <NotefulContext.Consumer>
            {(value) => 
                {return(

                <div className="note">
                <ListNote note={value.selectedNote}/>
                    
                <p>{value.selectedNote.content}</p>            

                </div>
                

            )}
            }
            
        </NotefulContext.Consumer>



    )


}

export default Note;