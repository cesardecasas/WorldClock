import React,{useState, useEffect} from 'react'
import Menu from './components/Menu'
import Clock from './components/Clock'
import Footer from './components/Footer'
import Spinner from 'react-bootstrap/Spinner'

const Main = ()=>{

    const [times, setTimes] = useState([]);

    const getLocal =()=>{
        setTimes([...times,'Local time'])
        
    }
    useEffect(()=>{
        setInterval(getLocal(),1000)
    },[])


    return(
        <main>
            <h1>World Clock!</h1>
            <div className='grid'>
                {times[0] ? times.map((time, index)=><Clock timeZone={time} key={index} times={times} setTimes={setTimes} /> ) : <Spinner animation="grow" variant="success" />}
                
                <Menu setTimes={setTimes} times={times}/>
            </div>
            <Footer/>
        </main>
    )
}

export default Main