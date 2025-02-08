import React, { useState } from 'react';
import './about.css';

function About() {

    const [showEmail, setShowEmail] = useState(false);

    function showInfo() {
        console.log('My email is christian.bonilla@uabc.edu.mx');
        setShowEmail(!showEmail);
    }

    return (
        <div className="about page">
            <h1>Christian Bonilla</h1>
            { showEmail 
                ? <h5>christian.bonilla@uabc.edu.mx</h5>
                : <p>Click the button bellow to see my email address.</p> 
            }
            <button className='btn btn-outline-dark' onClick={showInfo}>
                { showEmail ? 'Hide my email' : 'Show my email' }
            </button>
        </div>
    );
}

export default About;

/***
 * create an About page
 * cerate the basic component on the jsx
 * render a H1 with your name
 * render a h5 with your email
 * render a button with text: Show my email
 * when clicked, call a showInfo function
 * ShowInfo functio should console log a message
 * 
 * 
 * on app.js
 * render About below <Catalog>
 * 
 */