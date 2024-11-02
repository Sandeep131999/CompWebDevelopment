import React from 'react';
import Emoji from './Emoji';
import emojipedia from '../emojipedia';

function emojiMap(emojipedia){
    return(
        <Emoji
            emoji = {emojipedia.emoji}
            name  = {emojipedia.name}
            meaning = {emojipedia.meaning.substring(0, 100)}
        />
    )
}

function App()
{
    
    return(
        emojipedia.map(emojiMap) 
    );
}

export  default App;