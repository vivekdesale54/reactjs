// import React from 'react';
// import Tweet from './component/tweet.js';
import CreateTweet from './component/Createtweet.js';
import Tweet from './component/tweet.js';
// import {useState} from 'react';


function App() {
  const name = "Jhonny depp";
  const message = "I am a pirate";
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', height: '100vh'}}>
      <CreateTweet /> 
      <Tweet name={name} message={message} />
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

