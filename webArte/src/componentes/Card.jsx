import React from 'react';
import './Card.css'
function Card({userName='?', name='No name'}) {
    return (
        <div className='cd-contenedorPersonas'>
            <img className='cd-imagen'           
            
            src={`https://unavatar.io/twitter/${userName}`}
            alt="imagen de la card"/>
            <h2 className='cd-userName'>{userName}</h2>
            <p>{name}</p>
        </div>    
    )
}



export default Card