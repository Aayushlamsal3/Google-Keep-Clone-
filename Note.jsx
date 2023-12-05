import React from "react"

const Cards=(props)=>{
    return(
        <>
   <div className="CardBox">
   <div className="cards">
            <p className="CardsTitle">{props.title}</p>
            <p className="CardsNotes">{props.content}</p>
        </div>
   </div>

        </>
    )
}

export default Cards;
