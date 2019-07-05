import React from 'react';
import {Route, Link} from "react-router-dom";
import './App.css';
import Folders from "./Folders/Folders";
import NotesSection from "./NotesSection/NotesSection";
import AddFolder from "./AddFolder/AddFolder";
import AddNote from "./AddNote/AddNote";
import NotefulContext from "./NotefulContext";
import Note from "./Note/Note";
import Error from "./Error/Error";

class App extends React.Component{
  
  constructor(props){

    super(props);
    
    this.state = {

      folders: [],
      notes: [],
      selectedFolder: "",
      selectedNote: "",
      error: null
    }

  }

  setFolders = folders =>{

    this.setState({
      folders,
      error: null
    })

  }

  setNotes = notes =>{

    this.setState({

      notes,
      error: null

    })

  }

  addFolder = folder =>{
    this.setState({

      folders: [ ...this.state.folders, folder],
    })

  }

  addNote = note =>{
    this.setState({

      notes: [ ...this.state.notes, note],
    })

  }

  updateSelectedFolder = (id) => {
    
    this.setState({
      selectedFolder: id
    })
    
  }

  updateSelectedNote = (id) =>{

    console.log(id);
    this.setState({

      selectedNote: id
    })

  }

  updateNotes = (id)=>{

    const filteredNotes = this.state.notes.filter(note => note.id !== id);

    this.setState({
      notes: filteredNotes
    })

  }

  
  componentDidMount() {

    fetch("http://localhost:9090/folders", {
      method: 'GET',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setFolders)
      .catch(error => this.setState({ error }))


      fetch("http://localhost:9090/notes", {
        method: "GET",
      })
        .then(res =>{
          if(!res.ok){
            throw new Error(res.status)
          }
          return res.json()
        })
        .then(res => this.setState({
          notes: res

        })
        )
        .catch(error => this.setState({error}))
      
  }


  render(){

    const contextValue={
      folders: this.state.folders,
      notes: this.state.notes,
      selectedFolder: this.state.selectedFolder,
      selectedNote: this.state.selectedNote,
      updateSelectedFolder: this.updateSelectedFolder,
      updateSelectedNote : this.updateSelectedNote,
      updateNotes: this.updateNotes

    }
    console.log(this.state.notes)
    return (

      <main className="App">
        <div className="header">
          <Link to="/"><h1>Noteful</h1></Link>
        </div>

        <NotefulContext.Provider value={contextValue}>
          <Route
            exact path="/"
            render={()=> 
            <>
              <div className="sideBar">
                <Error action="display folders">
                  <Folders folders={this.state.folders}></Folders>
                </Error>
              </div>
              <div className="mainSection">
                <Error action="display notes">
                  <NotesSection selectedFolder=""/>
                </Error>
              </div>
            </>
            }
          />
            
            
          <Route
            exact path="/folder/:folderId"
            render={
              ()=>
              <>
                  <div className="sideBar">
                    <Error action="display folders">
                      <Folders selectedFolder={this.state.selectedFolder} folders={this.state.folders}></Folders>
                    </Error>
                  </div>
                  <div className="mainSection">
                    <Error action="display notes">
                      <NotesSection selectedFolder={this.state.selectedFolder}/>
                    </Error>
                  </div>
              </>
            }
          />

          <Route
            exact path="/note/:noteId"
            render={({history})=>
              <>
                  <div className="sideBar">
                      <input type="button" className="backButton" onClick={history.goBack} value="Back"/>
                      <Error action="display folders">
                        <Folders selectedFolder={this.state.selectedFolder} folders={this.state.folders}></Folders>
                      </Error>
                  </div>
                    <Error action="display note content">
                      <Note/>
                    </Error>
              </>
            }
          />

          <Route
            exact path="/addfolder"
            render={({history})=>
              <>
                  <div className="sideBar">
                    <Error action="display folders">
                      <Folders folders={this.state.folders}/>
                    </Error>
                  </div>
                    <Error action="access/complete folder creation">
                      <AddFolder history={history} addFolder={this.addFolder}/>
                    </Error>
              </>    
                
            }
          /> 

          <Route
            exact path="/addnote"
            render={({history})=>
              <>
                  <div className="sideBar">
                    <Error action="display folders">
                      <Folders folders={this.state.folders}/>
                    </Error>
                  </div>
                  <Error action="access/complete note creation">
                    <AddNote history={history} updateSelectedNote={this.updateSelectedNote} addNote={this.addNote}/>
                  </Error>
              </>    
                
            }
          />

        </NotefulContext.Provider>
        
      </main>
    );
  } 
}

export default App;
