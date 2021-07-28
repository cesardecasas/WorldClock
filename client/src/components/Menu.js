import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import InputGroup from 'react-bootstrap/InputGroup'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import {ImSearch} from 'react-icons/im'
import Select from 'react-select'
import Timezones from './timezone.json'


const Menu =(props)=>{

  const {times, setTimes} = props

    const [show, setShow] = useState(false);
    const [value,setValue] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange =(e)=>{
      setValue(e.text)
    }

    const submit =()=>{
      setTimes([...times, value])
      handleClose()
    }


    return(
        <div>
            <>
        <BsFillPlusCircleFill onClick={handleShow} className='add'/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Select zone</Offcanvas.Title>
        </Offcanvas.Header>
        <InputGroup className="mb-3">
                  <Select options={Timezones} className='select' onChange={(e)=>handleChange(e)}/>
            <Button variant="outline-secondary" id="button-addon2" onClick={submit}>
            <ImSearch/>
            </Button>
        </InputGroup>
      </Offcanvas>
    </>
        </div>
    )
}

export default Menu