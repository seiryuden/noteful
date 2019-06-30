import React from "react";
import NotefulContext from "../NotefulContext";

class deleteNote extends React.Component{

    static contextType = NotefulContext;
    
  deleteNote = () => {
    console.log(this.props.noteId)
    fetch(`http://localhost:9090/notes/${(this.props.noteId)}`, {
        method: 'DELETE',
        headers: {
    'content-type': 'application/json'
    },
    })

    this.context.updateNotes(this.props.noteId);
  }

    
    render(){

        return(
            <div>
                <button onClick={this.deleteNote}>Delete</button>
    
            </div>
    
        )
    


    }
    
}

export default deleteNote;