import React from 'react';
import Score from './Score';

const Student = ({name, bio, scores}) => {
  return (
    <div className="student">
        <h2>{name}</h2>
        <p>Bio: {bio}</p>
        <Score scores={scores} />
    </div>
  )
}

export default Student