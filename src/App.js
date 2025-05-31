import React from 'react';
import Tweet from './component/tweet.js';
import CreateTweet from './component/Createtweet.js';


function App() {
  const name = "John Doe";
  const message = "This is going out of the way";
  const name2 = "Jane Dow";
  const newmessage = () => {
    alert("Hello, world from react!");
  }
    return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', height: '100vh'}}>
      <h1 style={{color: 'black', font: 'Poppins'}}>Hello React</h1>
      <h1>Hello {name2}</h1>
      <CreateTweet /> 
      <Button2 />
      <Tweet name={name} message ={message} />
      <button onClick={newmessage}>Click me</button>
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

function Creategreet() {
  const greet = "Welcome to learn React";
  return (
    <div>
      <h1 style={{color: "red", fontsize: "10rem", fontFamily: "Plus Jakarta Sans"}}>{greet}</h1>
    </div>
  ); 
}


export default App;



//Props 

