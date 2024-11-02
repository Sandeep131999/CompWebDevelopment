import React from 'react';

function createEmoji(prop)
{
    return(
    <card>
        <p>{prop.emoji}</p>
        <h3>{prop.name}</h3>
        <p>{prop.meaning}</p>
    </card>  
    );
}

export default createEmoji; 