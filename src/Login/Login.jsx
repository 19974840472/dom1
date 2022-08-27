import React from 'react'
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div style={{position:'relative',height:'500px'}}>
            <Link to='/home' style={{backgroundColor:'pink',padding:'20px',position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}>start App</Link>
        </div>
    )
}