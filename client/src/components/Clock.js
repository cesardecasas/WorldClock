import React,{useState} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import CloseButton from 'react-bootstrap/CloseButton'
import '../css/Clock.css';
import AnalogClock from 'analog-clock-react';


const Clock =(props)=>{
    
    const [time, setTime]=useState('')
    const [date, setDate]=useState('')
    const [current, setCurrent] = useState(null)
    const [current2, setCurrent2] = useState(null)
    const [current3, setCurrent3] = useState(null)

    const removeClock =()=>{
        let a = props.times
        a.splice(a.indexOf(props.timeZone),1)
        props.setTimes([...a])
    }
    
    let d 
    let s
    let m
    let h
    const getTime =()=>{
        
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
        setCurrent(d.getSeconds())
        setCurrent2(d.getMinutes())
        setCurrent3(d.getHours())
        s = d.getSeconds();
        m = d.getMinutes();
        h = d.getHours();
        setTime( ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2))
        setDate(d.toLocaleDateString())
        return d
    }

    let options = {
        useCustomTime: true,    // set this to true
        width: "100px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#17a2b8",
        centerColor: "#459cff",
        centerBorderColor: "#fff",
        handColors: {
          second: "#d81c7a",
          minute: "#fff",
          hour: "#fff"
        },
        "seconds": current,   // set your
        "minutes": current2,  // own
        "hours": current3     // time here.
    };
  


    setInterval(getTime, 1000)

    return (
        <div className='clock-div'>
            <CloseButton aria-label="Hide" onClick={removeClock} className='closed'/>
            <h4 height={'35%'}>{props.timeZone.includes(')') ? props.timeZone.split(')')[1] : props.timeZone}</h4>
            <p>{date}</p>
            {current !== null ? <AnalogClock {...options} /> : <Spinner animation="border" variant="success" />}
            
            {time ? <p fontSize={"30px"}>{time}</p> : <Spinner animation="border" variant="success" />}
            
        </div>
    )
}

export default Clock