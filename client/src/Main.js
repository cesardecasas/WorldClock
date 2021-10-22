import React,{useState, useEffect} from 'react'
import Menu from './components/Menu'
import Clock from './components/Clock'
import Footer from './components/Footer'
import Spinner from 'react-bootstrap/Spinner'
import Navbar from 'react-bootstrap/Navbar'
import { FcAlarmClock} from 'react-icons/fc'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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
            <Navbar bg="dark" variant="dark">
                
                <Navbar.Brand className='heading'>
                    <FcAlarmClock className='title'/>
                    World Clock!
                </Navbar.Brand>
                
            </Navbar>
                <Row style={{width:'98%'}} xs={1} sm={2} md={2} lg={3} xl={4}>
                {times[0] ? times.map((time, index)=><Col key={index}><Clock timeZone={time} times={times} setTimes={setTimes} /></Col> ) : <Spinner animation="grow" variant="success" />}
                <Col>
                    <Menu setTimes={setTimes} times={times}/>
                </Col>
                </Row>
            <Footer/>
        </main>
    )
}

export default Main