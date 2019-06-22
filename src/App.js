import React from 'react';
import {Route, Link} from "react-router-dom"
import './App.css';
import Store from "./dummy-store";
import MainPage from "./MainPage/MainPage";
import FoldersPage from "./FoldersPage/FoldersPage";
import NotesPage from "./NotesPage/NotesPage";

class App extends React.Component{
  
  constructor(props){

    super(props);
    
    this.state = {

      folders: Store.folders,
      notes: Store.notes,
      selectedFolder: "",
      selectedNote: ""
    }

  }

  updateSelectedFolder = (id) => {
    
    this.setState({
      selectedFolder: id
    })
  
  console.log(this.state.selectedFolder)
    
  }

  updateSelectedNote = (id) =>{

    console.log(id);
    this.setState({

      selectedNote: id
    })

  }


  render(){
    
    return (
      <main className="App">
        <div className="header">
          <Link to="/"><h1>Noteful</h1></Link>
        </div>
          <Route
            exact path="/"
            render={()=>
              <MainPage folders={this.state.folders} notes={this.state.notes} selectedFolder="" updateSelectedFolder={(id) => this.updateSelectedFolder(id)} selectedNote={this.state.selectedNote} updateSelectedNote={(id)=> this.updateSelectedNote(id)}/>
            }
            />
          <Route
            exact path="/folder/:folderId"
            render={()=>
              <FoldersPage folders={this.state.folders} notes={this.state.notes} selectedFolder={this.state.selectedFolder} updateSelectedFolder={(id) => this.updateSelectedFolder(id)} selectedNote={this.state.selectedNote} updateSelectedNote={(id)=> this.updateSelectedNote(id)}/>
            }
          />

          <Route
            exact path="/note/:noteId"
            render={()=>
              <NotesPage folders={this.state.folders} notes={this.state.notes} selectedFolder={this.state.selectedFolder} updateSelectedFolder={(id) => this.updateSelectedFolder(id)} selectedNote={this.state.selectedNote}/>
            
            }
          />
        
      </main>
    );
  } 
}

export default App;
