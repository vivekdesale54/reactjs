import React from "react";
import Tweet from "./tweet.js";


const TweetList = ({name, message}) => {
    return (
        <div className="tweet-list">
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
        </div>
    );
}; 

export default TweetList;