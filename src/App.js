import React from 'react';
import Tweet from './component/tweet.js';
import CreateTweet from './component/Createtweet.js';
import TweetList from './component/Tweetlist.js';


function App() {
  const name = "John Doe";
  const message = "This is going out of the way";
  const name1 = "Jane Doe";
  const message1 = "This is going way out of the way";
  const name2 = "Yashandra bahubali";
  const message2 = "This is going out of the way, but not too far";
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', height: '100vh'}}>
      <h1 style={{color: 'black', font: 'Poppins'}}>Hello React</h1>
      <CreateTweet /> 
      <Tweet />
      <TweetList name ={name} message ={message} />
      <Tweet name={name1} message={message1}/>
      <Tweet name2={name2} message2={message2}/>
      <Button2 />
      <p>Welcome to the world of React!</p>
      <Btn3 />
      <Creategreet />
    </div>
  );
}



function Button2() {
  return (
    <button style= {{color: 'red', fontsize: '5rem', height: '1.5rem',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Manage your data</button>

  );
}

function Btn3() {
  return(
    <button style={{color: 'red', height: '4rem', width: '8rem'}}>Submit the data you want</button>
  );
}

function Creategreet(){
  const greet = "Welcome to learn React";
  return (
    <div>
      <h1 style={{color: "red", fontsize: "10rem", fontFamily: "Plus Jakarta Sans"}}>{greet}</h1>
    </div>
  ); 
}
 
export default App;



//Props 

