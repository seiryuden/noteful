import React from "react";
import PropTypes from "prop-types";
import NotefulContext from "../NotefulContext";
import "./AddNote.css";
import ValidationError from "../ValidationError/ValidationError";


class AddNote extends React.Component{

    static contextType = NotefulContext;

    constructor(props){

        super(props)
        this.state={
            noteName: {name: "", touched: false},
            noteFolder: {folder: "", touched: false},
            noteContent: {content: "", touched: false}
        }

    }


    updateNoteName = (name) =>{

        this.setState({

            noteName: {name: name, touched: true}

        })
        
    }

    updateNoteFolder = (folder)=>{

        this.setState({
            noteFolder: {folder: folder, touched: true}
        })
    }

    updateNoteContent = (content) =>{

        this.setState({

            noteContent: {content: content, touched: true}

        })
       
    }

    

    validate(){

        const name= this.state.noteName.name.trim();
        const content= this.state.noteContent.content.trim();
        const folder= this.state.noteFolder;

        if(name.length === 0 || content.length === 0 || folder === ""){
            return "Please fill in all the fields";
        } 
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
                    <input type="text" name="noteName" id="noteName" placeholder="New Note" onChange={e => this.updateNoteName(e.target.value)}></input>

                    <label htmlFor="noteFolder">Note Folder:</label>
                    <select type="selection" name="noteFolder" id="noteFolder" placeholder="Select Folder" onChange={e => this.updateNoteFolder(e.target.value)}>
                        <option value="" hidden>Select folder</option>
                        {this.context.folders.map((folder,i)=>{
                            return(
                            <option key={i} value={folder.id}>{folder.name}</option>
                            )
                        })}

                    </select>

                    <label htmlFor="noteContent">Note Content:</label>
                    <textarea name='noteContent' id='noteContent' onChange={e => this.updateNoteContent(e.target.value)}/>
                    {(this.state.noteName.touched || this.state.noteFolder.touched || this.state.noteContent.touched) && <ValidationError message={this.validate()}/>}
                    <button type="button" onClick={this.onClickCancel} >Cancel</button>
                    <button type="submit" disabled={this.validate()}>Create</button>


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