import React from "react";
import {withRouter} from "react-router-dom";
import Folders from "../Folders/Folders";
import Note from "../Note/Note";
import "../MainPage/MainPage.css";

class NotesPage extends React.Component{

    

    render(){

        console.log(this.props);
        return(
            <div className="Main">
                <div className="sideBar">
                    <input type="button" className="backButton" onClick={this.props.history.goBack} value="Back"/>
                    <Folders 
                        folders={this.props.folders} 
                        selectedFolder={this.props.selectedFolder} 
                        updateSelectedFolder={this.props.updateSelectedFolder}/>
                </div>
                <Note selectedNote={this.props.selectedNote}
                />

            </div>
            
        )

    }

}

export default withRouter(NotesPage);