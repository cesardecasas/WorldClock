import React,{useState, useEffect} from 'react'
import Menu from './components/Menu'
import Clock from './components/Clock'
import Footer from './components/Footer'

const Main = ()=>{

    const [times, setTimes] = useState([]);

    const getLocal =()=>{
        setTimes([...times,'local'])
        
    }
    useEffect(()=>{
        setInterval(getLocal(),1000)
    },[])


    return(
        <main>
            <h1>World Clock!</h1>
            <div className='grid'>
                {times[0] ? times.map((time, index)=><Clock time={time} key={index}/> ) : <p>Loading</p>}
                
                <Menu/>
            </div>
            <Footer/>
        </main>
    )
}

export default Main