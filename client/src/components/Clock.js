import React,{useState} from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Clock =(props)=>{
    
    const [time, setTime]=useState('')

    const getTime =()=>{
        let d
        props.timeZone === 'local' ? d = new Date() :  d = new Date(props.time);  
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        setTime( ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2))
    }

    setInterval(getTime, 1000)

    return (
        <div>
            <h4>Local Time</h4>
            {time ? <p fontSize={"30px"}>{time}</p> : <Spinner animation="border" variant="success" />}
            
        </div>
    )
}

export default Clock