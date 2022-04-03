import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const RingContext = createContext('hello value');

const Grandpa = () => {

  const [houseNo, setHouseNo] = useState(1);
  const newGift = 'Diamond Necklace';

  const handleHouseNo = () => {
    setHouseNo(houseNo + 1);
  }

  return (

    <RingContext.Provider value={[houseNo, setHouseNo]}>
      <div className='grandpa'>
        <h3>Grand Pa</h3>
        <button onClick={handleHouseNo}>increase houseNumber</button>
        <section style={{ display: 'flex' }}>

          <Father houseNo={houseNo}></Father>
          <Uncle houseNo={houseNo}></Uncle>
          <Aunty houseNo={houseNo}></Aunty>
        </section>
      </div>
    </RingContext.Provider>

  );
};

export default Grandpa;