import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import {ImSearch} from 'react-icons/im'

const Menu =()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <div>
            <>
        <BsFillPlusCircleFill onClick={handleShow} className='add'/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Select zone</Offcanvas.Title>
        </Offcanvas.Header>
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Place's name"
            aria-label="Place's name"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
            <ImSearch/>
            </Button>
        </InputGroup>
      </Offcanvas>
    </>
        </div>
    )
}

export default Menu