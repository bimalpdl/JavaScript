import React from 'react';
import  './Hello.css';
import bimalpic from'../images/bimal.jpg';


const Hello = (props) => {
    return (
        <div className='user-container'>
            <h2 id='user-name'>Hello {props.naam}!</h2>
<img src={bimalpic} alt="No image found" height="100px" width="100px" />
<p id="desc">{props.naam} is learning React now a days.</p>
        </div>
    )
}

export default Hello;