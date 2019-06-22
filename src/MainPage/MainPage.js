import React from "react";
import "./MainPage.css";
import Folders from "../Folders/Folders";
import NotesSection from "../NotesSection/NotesSection";


class MainPage extends React.Component{

    render(){
        
        
        return (
        <div className="Main">
            <div className="sideBar">
                <Folders folders={this.props.folders} updateSelectedFolder={this.props.updateSelectedFolder} selectedFolder={this.props.selectedFolder}></Folders>
            </div>
            <NotesSection notes={this.props.notes} selectedFolder={this.props.selectedFolder} selectedNote={this.props.selectedNote} updateSelectedNote={this.props.updateSelectedNote}/>
        
        </div>
        )
    }
    


}

export default MainPage;