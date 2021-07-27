import React,{useState} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import CloseButton from 'react-bootstrap/CloseButton'

const Clock =(props)=>{
    
    const [time, setTime]=useState('')
    const [date, setDate]=useState('')

    const removeClock =()=>{
        let a = props.times
        a.splice(a.indexOf(props.timeZone),1)
        props.setTimes([...a])
    }

    const getTime =()=>{
        let d
        if(props.timeZone === 'Local time'){
            d = new Date();  
            
        }else{
            d= new Date()
            let a
            const utcOffset = props.timeZone.split('U')[1].split(')')[0]
            const ownOffset = d.toString().split('GMT')[1].split(' ')[0]
            parseInt((ownOffset*0.01)+1)
            if(utcOffset.includes('-')){
                a = parseInt(utcOffset.split('-')[1])
                d.setMinutes(d.getMinutes()+((-a*60)+5*60))
            }else{
                a = parseInt(utcOffset.split('+')[1])
                d.setMinutes(d.getMinutes()+((a*60)+5*60))
            }
            
        }
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        setTime( ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2))
        setDate(d.toLocaleDateString())
    }

    setInterval(getTime, 1000)

    return (
        <div>
            <CloseButton aria-label="Hide" onClick={removeClock} marginLeft={'80%'} className='closed'/>
            <h4>{props.timeZone.includes(')') ? props.timeZone.split(')')[1] : props.timeZone}</h4>
            <p>{date}</p>
            {time ? <p fontSize={"30px"}>{time}</p> : <Spinner animation="border" variant="success" />}
            
        </div>
    )
}

export default Clock