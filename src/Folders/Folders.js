import React from "react";
import {NavLink, Link} from "react-router-dom";
import PropTypes from 'prop-types';
import "./Folders.css";
import NotefulContext from "../NotefulContext";


class Folders extends React.Component{
    static contextType = NotefulContext;
    
    
    onSelectFolder(id){
        
        this.context.updateSelectedFolder(id)

    }


    
    render(){
        
        console.log(this.props)
        const folders = this.props.folders.map((folder,i) => 
        
        <NavLink to={`/folder/${folder.id}`} key={i}>
        
            <div className="folder">
                
                <label className="radioLabel" htmlFor={folder.name} onClick={() => this.onSelectFolder(folder.id)}>
                    <input type="radio" id={folder.name} className="radio" name="folder"  value={folder.name}/>
                    {folder.name}
                </label>

            </div>
        </NavLink>
        
        );


    return(
        
            <div className="foldersCont">  
                {folders}
                <Link to="/addfolder">Add Folder</Link>  
            </div>
        
    )
    }
}

export default Folders;

Folders.propTypes = {
    folders: PropTypes.array.isRequired,
    
  };