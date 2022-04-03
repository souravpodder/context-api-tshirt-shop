import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';


const Special = ({ gift }) => {

  // console.log(RingContext);

  const [houseNo, setHouseNo] = useContext(RingContext);

  return (
    <div>
      <h3>special one</h3>
      {/* <p>Gift:{newGift}</p> */}
      <p>house: {houseNo}</p>
      <button onClick={() => setHouseNo(houseNo + 1)}>get a house</button>
    </div>
  );
};

export default Special;