import React from "react";
import NotefulContext from "../NotefulContext";
import "./AddFolder.css";
import ValidationError from "../ValidationError/ValidationError";
import PropTypes from "prop-types";



class AddFolder extends React.Component{

    static contextType = NotefulContext;

    constructor(props){

        super(props)
        this.state={
            folderName: "",
            touched: false
        }

    }


    updateFolderName = (name) =>{

        this.setState({

            folderName: name,
            touched: true

        })
        
    }

    validateName(){

        const name= this.state.folderName.trim();

        if(name.length === 0){
            return "Name is required";
        }
    }


    handleSubmit = (e)=>{

        e.preventDefault();
        const newFolder = {name: this.state.folderName};
        console.log(newFolder);

        fetch("http://localhost:9090/folders", {
            method: "POST",
            body: JSON.stringify(newFolder),
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

            this.props.addFolder(data)    
            this.props.history.push(`/`) 
        }   
        )
        .catch(error => this.setState({error}))       
        
    }

   onClickCancel = ()=>{

        this.props.history.push('/')

   }

    render(){
        console.log(this.state.folderName)

        return(
            <section  className="mainSection">
                <h2 className="title">Create a Folder</h2>
                <form
                    className="addFolderForm"
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor="folderName">Folder Name:</label>
                    <input type="text" name="folderName" id="folderName" placeholder="New folder" onChange={e => this.updateFolderName(e.target.value)} required></input>
                    {this.state.touched && <ValidationError message={this.validateName()}/>}
                    <button type="button" onClick={this.onClickCancel} >Cancel</button>
                    <button type="submit" disabled={this.validateName()}>Create</button>


                </form>
            
            
            
            </section>

        )
    }

}

export default AddFolder;

AddFolder.propTypes = {
    addFolder: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
    
  };