import React from "react";

export default function JobCard(props) {
  console.log("inside job card..", props.data);
  return (
    <div>
     Company link: <a href={props.data.url} target="_blank" rel="noopener noreferrer">
        <h3>Title:{props.data.title}</h3>
        {(props.data.type = "Full Time" && <p>FULL TIME</p>)}
        {props.data.company_logo && (
          <img alt="logo" src={props.data.company_logo} />
        )}
        <h3>company:{props.data.company}</h3>
        <h3>Location: {props.data.location}</h3>
      </a>
    </div>
  );
}
