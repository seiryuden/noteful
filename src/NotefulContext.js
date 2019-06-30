import React from "react";

const NotefulContext = React.createContext({

    folders: [],
    notes: [],
    selectedFolder: "",
    selectedNote: "",
    updateSelectedFolder: () => {},
    updateSelectedNote : () =>{},
    updateNotes: () =>{}
    
})

export default NotefulContext;