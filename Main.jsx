import React, { useState } from "react"

const Main=(props)=>{
    const[note,SetNote]=useState({
        title:"",
        content:""
    })

    const InputEvent=(event)=>{

        const value=event.target.value
        const name=event.target.name

        SetNote((PreValue)=>{
            return {
                ...PreValue,
                [name]:value
            }
        })
    }
    
    const clicked=()=>{
        props.passNote(note)
        SetNote({
            title:"",
            content:""
        })
    }

    return(
        <>
      <div className="box">
      <div className="main">
            <input type="text"  placeholder="Title" name="title" id=""  value={note.title} onChange={InputEvent} />
            <textarea placeholder="Take a Note.."name="content" value={note.content} className="textArea"  onChange={InputEvent} id="" cols="30" rows="10"></textarea>
            <button onClick={clicked} type="button" class="btn btn-warning">add</button>
        </div>
      </div>
        </>
    )
}

export default Main;
