import React from 'react';
import {Route, Link} from "react-router-dom";
import './App.css';
import MainPage from "./MainPage/MainPage";
import FoldersPage from "./FoldersPage/FoldersPage";
import NotesPage from "./NotesPage/NotesPage";
import NotefulContext from "./NotefulContext";

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

  updateNotes = (id)=>{

    const filteredNotes = this.state.notes.filter(note => note.id != id);

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
      .then(res => this.setState({
        folders: res
      })
      )
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
              <MainPage selectedFolder=""/>
            }
            />
          <Route
            exact path="/folder/:folderId"
            component={FoldersPage}
          />

          <Route
            exact path="/note/:noteId"
            component={NotesPage}
          />
        </NotefulContext.Provider>
        
      </main>
    );
  } 
}

export default App;
