import React from "react";

const CreateTweet = () => {
    return(
        <form
        onSubmit={(e) => {
            e.preventDefault();
        }}
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', marginBottom: '1rem'}}>
            <textarea cols="50" rows="5" style={{marginBottom: '1rem'}}></textarea>
            <button style={{cursor: 'pointer'}}>Submit</button>
        </form>
    
    );
};

export default CreateTweet;