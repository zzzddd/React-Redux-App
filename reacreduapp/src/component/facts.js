import React from "react";

export default function JobCard(props) {
   console.log("inside jobcard....", props);
  return (
   
    <div>
      <a href={props.data.url} target="_blank" rel="noopener noreferrer">
        <h2>{props.data.title}</h2>
        {(props.data.type = "Full Time" && <p>FULL TIME</p>)}
       
        <h3>{props.data.company}</h3>
        <h3>Location: {props.data.location}</h3><br></br>
      </a>
    </div>
  );
}
