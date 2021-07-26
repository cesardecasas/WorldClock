import React from 'react'

const Clock =(props)=>{
    console.log(props.time)
    return (
        <div>
            <h3>Place/time zone</h3>
            <p>{props.time[2]}</p>
        </div>
    )
}

export default Clock