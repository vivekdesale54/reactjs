// import React, {useState} from "react";


const CreateTweet = ({tweets, setInput, textInput, setTweets}) => {
    //Functions
     const UserInputHandler = (e) => {
        setInput(e.target.value);
        // console.log(e.target.value);        
    };
    const SubmitHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, textInput]);
        setTweets('');
    };
   
    return(
        <form onSubmit={SubmitHandler} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', marginBottom: '1rem'}}>
            <textarea value={textInput} onChange={UserInputHandler} cols="50" rows="5" style={{marginBottom: '1rem'}}></textarea>
            <button style={{cursor: 'pointer'}}>Click me</button>
        </form>
    );
};

export default CreateTweet;