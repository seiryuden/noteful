import React from "react";
import {Link} from "react-router-dom";
import "./Folders.css";

class Folders extends React.Component{
    
    
    onSelectFolder(id){
        
        this.props.updateSelectedFolder(id)

    }


    
    render(){
        
        console.log(this.props)
        const folders = this.props.folders.map((folder,i) => 
        
        <Link to={`/folder/${folder.id}`} key={i}>
        
            <div className="folder">
                
                <label className={folder.id === this.props.selectedFolder ? "radioLabel selected" : "radioLabel"} htmlFor={folder.name} onClick={() => this.onSelectFolder(folder.id)}>
                    <input type="radio" id={folder.name} className="radio" name="folder"  value={folder.name}/>
                    {folder.name}
                </label>
            </div>
        </Link>
        );


    return(

        <div className="foldersCont">
         
          {folders}  
        </div>
    
    )
    }



    

}

export default Folders;