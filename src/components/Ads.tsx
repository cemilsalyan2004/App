import React from 'react';
import AdItem from './AdItem';

import { ads } from './data';

const Ads: React.FC = () => {
  return (
    <div className='px-8 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-7 gap-x-4 xl:gap-y-6'>
      {ads.map((ad, index) => (
        <AdItem
          key={index}
          image={ad.image}
          price={ad.price}
          description={ad.description}
          vip={ad.vip}
        />
      ))}
    </div>
  );
};

export default Ads;
