import React from 'react';


function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', height: '100vh'}}>
      <h1 style={{color: 'red', font: 'lato'}}>Hello React</h1>
      <Button />  <br />
      <br />
      <Button2/>
      <p>Welcome to the world of React!</p>
      <Btn3 />
    </div>
  );
}

function Button() {
  return (
    <button>Submit</button>
  );
}


function Button2() {
  return (
    <button>Manage your data</button>
  );
}

function Btn3() {
  return(
    <button style={{color: 'red', height: '4rem', width: '8rem'}}>Submit the data you want</button>
  );
}
 
export default App;
