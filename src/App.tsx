import React, { useState } from 'react';
import './Animation.css'

const emojis = [
  {name: 'Happy', value: '😃'}, 
  {name: 'Sad', value: '😢'}, 
  {name: 'Angry', value: '😡'}, 
  {name: 'Sleepy', value: '😴'}]

function App() {
  const [lastEmoji, setLastEmoji] = useState({name: '', value: ''})
  const [message, setMessage] = useState('')

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex'}}>
        {emojis.map((item, index)=>(
          <button  
            key={index} 
            style={{margin: '20px'}}
            onClick={()=>{
              if (lastEmoji === item && item.value === '😡') {
                setMessage('Whoa, calm down bro! Want some coffee?')
              } else {
                setLastEmoji(item)
                setMessage('')
              }
            }}
          >
            {item.value}
          </button>
        ))}
        </div>
        <p style={{color: 'red'}}>{message}</p>
        <div
          className={`${lastEmoji.name}-Emoji`}
        >
          {lastEmoji.value}
        </div>
    </div>
  );
}

export default App;
