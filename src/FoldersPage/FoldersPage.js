import React from "react";
import Folders from "../Folders/Folders";
import NotesSection from "../NotesSection/NotesSection";
import "../MainPage/MainPage.css";

class FoldersPage extends React.Component{

    

    render(){
    
        console.log(this.props);
        return(

            <div className="Main">
                <div className="sideBar">
                    <Folders folders={this.props.folders} updateSelectedFolder={this.props.updateSelectedFolder} selectedFolder={this.props.selectedFolder}></Folders>
                </div>
                <NotesSection notes={this.props.notes} selectedFolder={this.props.selectedFolder} selectedNote={this.props.selectedNote} updateSelectedNote={this.props.updateSelectedNote}/>
                
            </div>

        )
    }

}

export default FoldersPage;