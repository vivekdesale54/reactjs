import React from "react";


const Tweet = ({name, message, name1, name2, message1, message2}) => {
    return (
        <>
        <div className="tweet" style={{display: 'flex', flexDirection: 'column' ,alignItems: 'center', justifyContent: 'start', marginBottom: '1.5rem',}}>
            <h2>{name}</h2>
            <h3>{message}</h3>
            <h2>{name1}</h2>
            <h2>{message1}</h2>
            <h2>{name2}</h2>
            <h2>{message2}</h2>
            <button style={{cursor: 'pointer', marginBottom: '1.5rem'}}>Delete</button>
            <button style={{cursor: 'pointer'}}>Like</button>
        </div>
        <div>
            <p>Hello world</p>
        </div>
        </>
    );
}; 


export default Tweet;
