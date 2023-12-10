import React from "react"

const Note=(props)=>{
    return(
        <>
   <div className="cards">
   <div className="notess">
            <p className="CardsTitle">{props.title}</p>
            <p className="CardsNotes">{props.content}</p>
        </div>
   </div>

        </>
    )
}

export default Note;
