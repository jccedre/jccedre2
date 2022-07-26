import React from 'react';

import StatsCard from './StatsCard';

const statsCards = (props) => {
  let colorID = 0;
  return (
    <>
      {props.items.map((item, index) => {
        if (colorID > 1) {
          colorID = 0;
        } else {
          colorID++;
        }
        
         return (
           <StatsCard
             key={index}
             number={item.statsNumber}
             title={item.statsTitle}
             colorID={colorID}
             id={index}
           />
         );
      })}
    </>
  );
}

export default statsCards;