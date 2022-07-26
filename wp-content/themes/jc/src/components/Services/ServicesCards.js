import React from 'react';

import ServicesCard from './ServicesCard';

const servicesCards = (props) => {
  return (
    <>
      {props.items.map((item, key) => (
        <ServicesCard 
          key={key}
          subTitle={item.servicesCardTitle}
          description={item.servicesDescription}
          icon={item.servicesCardIcon}
        />
      ))}
    </>
  );
}

export default servicesCards;