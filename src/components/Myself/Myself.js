import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, gift }) => {
  return (
    <div>
      <p>house no: {house}</p>
      <h3>Myself</h3>
      <Special gift={gift} />
    </div>
  );
};

export default Myself;