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
                    <Folders ></Folders>
                </div>
                <NotesSection />
                
            </div>

        )
    }

}

export default FoldersPage;