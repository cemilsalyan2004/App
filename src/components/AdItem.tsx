import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { GiQueenCrown } from 'react-icons/gi';

interface Props {
  image: string;
  price: number;
  description: string;
  vip: boolean;
}

const AdItem: React.FC<Props> = ({ image, vip, price, description }) => {
  return (
    <div className='border border-blue-gray-200 relative rounded-lg cursor-pointer hover:shadow-lg '>
      {vip && (
        <GiQueenCrown
					title='VIP'
          size={27.5}
          className='-rotate-45 absolute -top-4 -left-3 z-50'
					color='#ffa500'
        />
      )}
      <div className='aspect-square overflow-hidden rounded-tr-lg border-tl-lg'>
        <img className='w-full h-full object-cover hover:scale-110 transition-transform' src={image} alt='Product' />
      </div>
      <div className='px-2 pb-2'>
        <div className='mt-2 font-semibold text-lg'>{price} AZN</div>
        <div className='line-clamp-2 mt-1 italic text-sm'>{description}</div>
        <div className='mt-3 flex items-center justify-between px-1'>
          <FaRegUserCircle size={27.5} />
          <BiMessageSquareDetail size={27.5} />
        </div>
      </div>
    </div>
  );
};

export default AdItem;
