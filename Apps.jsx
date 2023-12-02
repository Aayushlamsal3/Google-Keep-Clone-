import React, { useState } from "react"
import Header from "./Header";
import Main from "./Main";
import Cards from "./Cards";
import Footer from "./Footer";
import "./index.css"

const Apps=()=>{
    const[addItem,setAddItem]=useState([])

    const addNote=(note)=>{
        setAddItem((PreValue)=>{
           return [...PreValue,note] 
        })

    }
    return(
        <>
        <Header/>
        <Main passNote={addNote}/>

       {addItem.map((val,index)=>{
            return(
                <Cards
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                />
            )
        })}
        <Footer/>
        </>
    )
}

export default Apps;
