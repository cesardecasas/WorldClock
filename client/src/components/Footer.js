import React, { useEffect } from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer=()=>{


    useEffect(()=>{

    },[])

    return (
        <footer>
            <p>Website by Cesar De Casas</p>
            <p> World clock Frontend app</p>
            <div>
                <a href='https://github.com/cesardecasas'><SiGithub className='icon'/> </a>
                <a href='https://www.linkedin.com/in/cesardecasas/'><SiLinkedin className='icon'/></a> 
            </div>
            <br/>
        </footer>
    )
}

export default Footer