import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {

  const [houseNo, setHouseNo] = useContext(RingContext);

  const increaseHouseNo = () => {
    setHouseNo(houseNo + 1);
  }
  return (
    <div>
      <p>house no: {houseNo}</p>
      <h3>Aunty</h3>
      <button onClick={increaseHouseNo}>aunty buy house</button>

    </div>
  );
};

export default Aunty;