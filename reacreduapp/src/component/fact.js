import React from 'react';

import JobCard from './facts';
export default function Jobs(props) {
  return (
    <div>
      {props.data.map(job => (
        <JobCard key={job.id} data={job} />
      ))}
    </div>
  );
}