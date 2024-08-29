import {Link}from "react-router-dom";


import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div>    
                <Link to="/">Home</Link> 
                <Link to="/Info">Info</Link>
                <Link to="/State">State</Link>
            </div>
        </div>
    )
}
 
export default Header