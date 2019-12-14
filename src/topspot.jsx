import React from 'react';

export default props => {
  let urlString = `https://maps.google.com/?q=${props.location[0]},${props.location[1]}`

  return (
    <div className='well'>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <p>{props.location[0]}</p>
      <a href={urlString} className="btn btn-warning">Google Map Link</a>
    </div>
  );
}
