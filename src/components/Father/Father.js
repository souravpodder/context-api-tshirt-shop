import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ houseNo, gift }) => {
  return (
    <div>
      <p>house no: {houseNo}</p>
      <div style={{ display: 'flex' }}>
        <Myself house={houseNo} gift={gift}></Myself>
        <Brother house={houseNo}></Brother>
        <Sister house={houseNo}></Sister>
      </div>
    </div>
  );
};

export default Father;