import React, { useState } from "react"
import CreateNote from "./CreateNote";
import Note from "./Note";
import Header from "./Header";
import Foooter from "./Foooter";
import "./index.css"

const Apps=()=>{

    const[AddItem,SetAddItem]=useState([])
    const AddNote=(Datas)=>{
        SetAddItem((PreDatas)=>{
            return[...PreDatas,Datas]
        })
        console.log(Datas)
    }

    return(
        <>
        <Header/>
        <CreateNote PassNote={AddNote}/>
     <div className="mainn">
     {AddItem.map((val,index)=>{
        return <Note
        key={index}
        id={index}
        title={val.inp}
        content={val.txt}
        />
        })}
     </div>
        <Foooter/>
        </>
    )
}

export default Apps;
