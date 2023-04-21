import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageSrc} alt={props.imageAlt} />
      <button>{props.buttonText}</button>
    </div>
  );
}

export default Card;