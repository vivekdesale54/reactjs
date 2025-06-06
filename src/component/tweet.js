import React from "react";


const Tweet = ({ name, tweets, setName }) => {

    return (
        <div className="tweet" style={{display: 'flex', flexDirection: 'column' ,alignItems: 'center', justifyContent: 'start'}}>
            <h2>{name}</h2>
            <h3>{tweets}</h3>
            <button style={{cursor: 'pointer', marginBottom: '1.5rem'}}>Delete</button>
            <button style={{cursor: 'pointer'}}>Like</button>
        </div>
    );
}; 

export default Tweet;