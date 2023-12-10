import React, { useState } from "react"

const CreateNote=(props)=>{
    const[Datas,SetDatas]=useState({
        inp:"",
        txt:""
    })

    const InputEvent=(event)=>{

        const{value,name}=event.target

        SetDatas((PreValue)=>{
            return{
                ...PreValue,
                [name]:value
            }
        })
        console.log(Datas)
    }

    const submit=()=>{
        props.PassNote(Datas)
        SetDatas({
            inp:"",
            txt:""
        })
    }

    return(
        <>
<div className="real">
   <div className="main">
        <div className="box">
        <input type="text" placeholder="Title" value={Datas.inp} name="inp" id="" onChange={InputEvent} />
        <textarea name="txt" placeholder="Take a Note..." value={Datas.txt} id="" cols="30" rows="10" onChange={InputEvent} ></textarea>
        <button type="button" onClick={submit} class="btn btn-warning">Add</button>
        </div>
   </div>
</div>
        </>
    )
}

export default CreateNote;
