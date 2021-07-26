import React,{useState} from 'react'

const Clock =(props)=>{
    
    const [time, setTime]=useState('')

    const getTime =()=>{
        let d = new Date();
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        setTime( ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2))
    }

    setInterval(getTime, 1000)

    return (
        <div>
            <h3>Local Time</h3>
            <p fontSize={"30px"}>{time}</p>
        </div>
    )
}

export default Clock