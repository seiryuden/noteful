import React from "react";
import PropTypes from "prop-types";
import NotefulContext from "../NotefulContext";
import "./AddNote.css";

class AddNote extends React.Component{

    static contextType = NotefulContext;

    constructor(props){

        super(props)
        this.state={
            noteName: ""
        }

    }


    updateNoteName = (name) =>{

        this.setState({

            noteName: name

        })
        console.log(this.state.noteName)
    }


    handleSubmit = (e)=>{

        e.preventDefault();
        const newNote = {
            name: e.target.noteName.value,
            folderId: e.target.noteFolder.value,
            content: e.target.noteContent.value
            
        };
        console.log(newNote);

        fetch("http://localhost:9090/notes", {
            method: "POST",
            body: JSON.stringify(newNote),
            headers: {
                'content-type': 'application/json',
                
              }

        })
        .then(res=>{
            if(!res.ok){
                throw new Error(res.status)
            }
            return res.json();
        })
        .then(data =>{

            this.props.addNote(data)    
            this.props.history.push(`/`) 
        }   
        )
        .catch(error => this.setState({error}))


        
        
       
        
    }

   onClickCancel = ()=>{

        this.props.history.push('/')

   }

    render(){

        return(
            <section  className="mainSection">
                <h2>Create a Note</h2>
                <form
                    className="AddNote-form"
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor="noteName">Note Name:</label>
                    <input type="text" name="noteName" id="noteName" placeholder="New Note" /*onChange={e => this.updateFolderName(e.target.value)}*/></input>

                    <label htmlFor="noteFolder">Note Folder:</label>
                    <select type="selection" name="noteFolder" id="noteFolder" placeholder="Select Folder">
                        {this.context.folders.map((folder,i)=>{
                            return(
                            <option key={i} value={folder.id}>{folder.name}</option>
                            )
                        })}
                    
                    </select>

                    <label htmlFor="noteContent">Note Content:</label>
                    <textarea name='noteContent' id='noteContent'/>
                    <button type="button" onClick={this.onClickCancel} >Cancel</button>
                    <button type="submit">Create</button>


                </form>
            
            
            
            </section>

        )
    }

}

export default AddNote;

AddNote.propTypes = {

    addNote: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired


}