import React from "react";
import "./MainPage.css";
import Folders from "../Folders/Folders";
import NotesSection from "../NotesSection/NotesSection";


class MainPage extends React.Component{

    render(){
        
        
        return (
        <div className="Main">
            <div className="sideBar">
                <Folders selectedFolder={this.props.selectedFolder}></Folders>
            </div>
            <NotesSection selectedFolder={this.props.selectedFolder}/>
        
        </div>
        )
    }
    


}

export default MainPage;