import React, { useState } from 'react';
import './App.css'
import { emojis } from './EmojiList';

function App() {
  const [lastEmoji, setLastEmoji] = useState({name: '', value: ''})

  return (
    <div className='Container'>
      <div className='Emoji-list'>
        {emojis.map((item, index)=>(
          <button  
            key={index} 
            className='Emoji-button'
            onClick={()=>{
              if (lastEmoji === item && item.value === '😡') {
                alert('Whoa, calm down bro! Want some coffee?')
              } else {
                setLastEmoji(item)
              }
            }}
          >
            {item.value}
          </button>
        ))}
      </div>
      <div
        className={`${lastEmoji.name}-Emoji`}
      >
        {lastEmoji.value}
      </div>
    </div>
  );
}

export default App;
