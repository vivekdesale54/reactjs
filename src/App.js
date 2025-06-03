// import React from 'react';
// import Tweet from './component/tweet.js';
import { useState } from 'react';
import CreateTweet from './component/Createtweet.js';
import Tweet from './component/tweet.js';
// import {useState} from 'react';


function App() {
  // setName
    const [name] = useState("Jhonny dept");
    //Use state
    const [textInput, setInput] = useState('');
    const [tweets, setTweets] = useState(['']);
    return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', height: '100vh'}}>
      <CreateTweet textInput={textInput} 
      setInput={setInput} 
      tweets={tweets}
      setTweets={setTweets} 
    /> 
      <Tweet name={name} tweets={tweets} />
      <Button2 />
    </div>
  );
}

function Button2() {
  return (
    <button style= {{color: 'red', fontsize: '5rem', height: '1.5rem',display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "2rem"}}>Manage your data</button>

  );
}

export default App;



//Props 

