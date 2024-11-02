import React from "react";
import CreateEmoji from './Emoji';
import Emoji from '../emojipedia';

function EmojiPedia(Emoji){
  return(
    <CreateEmoji
      name={Emoji.name}
      emoji={Emoji.emoji}
      meaning={Emoji.meaning}
    />
  );
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
        {Emoji.map(EmojiPedia)}
    </div>
  );
}

export default App;
