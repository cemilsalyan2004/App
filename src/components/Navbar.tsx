import React from 'react';

import { DrawerDefault } from './Drawer';

import { AiFillHeart, AiOutlineUser } from 'react-icons/ai';
import { GrUploadOption } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';
import { LuCable, LuSofa } from 'react-icons/lu';
import { PiPlantLight, PiTShirtLight } from 'react-icons/pi';
import { AiOutlineHome } from 'react-icons/ai';
import { RiCarLine } from 'react-icons/ri';
import { BiDumbbell } from 'react-icons/bi';
import { IoBagOutline } from 'react-icons/io5';

import { catalogue } from './data';

const Navbar: React.FC = () => {
  return (
    <>
      <div className='rounded-lg overflow-hidden shadow-md px-4 py-2 bg-white mb-2'>
        <div className='border-b-gray-300 flex flex-row items-center justify-between pb-2 border-b-[1px]'>
          <span id='logo' className='text-2xl text-primary'>
            CMStore
          </span>
          <div className='flex flex-row items-center gap-2 sm:gap-4'>
            <AiFillHeart color='#ff0000' size={22} className='cursor-pointer' />
            <AiOutlineUser size={22} className='cursor-pointer sm:hidden' />
            <button className='cursor-pointer bg-gray-400 px-4 py-2 rounded-xl hidden sm:block text-sm'>
              Daxil ol
            </button>
            <GrUploadOption size={20} className='cursor-pointer sm:hidden' />
            <button className='cursor-pointer bg-primary text-white px-4 py-2 rounded-xl hidden sm:block text-sm'>
              Elan yerləşdir
            </button>
          </div>
        </div>
        <div className='border-gray-300 pt-2 sm:pt-4 flex flex-row justify-between items-center sm:block'>
          <div className='relative w-full order-2'>
            <input
              type='text'
              placeholder='     Axtar'
              className='border-[1px] border-gray-400 outline-none w-full px-2 py-1 rounded-lg'
              onFocus={(e) => {
                e.target.placeholder = 'Axtar';
                (e.target.nextSibling as SVGAElement).style.display = 'none';
              }}
              onBlur={(e) => {
                e.target.placeholder = '     Axtar';
                (e.target.nextSibling as SVGAElement).style.display = 'block';
              }}
            />
            <GoSearch
              color='#bdbdbd'
              size={22}
              className='absolute top-1/2 -translate-y-1/2 ml-2'
            />
          </div>
          <div className='flex flex-row items-center'>
            <DrawerDefault />
            <div className='w-full mt-4 hidden sm:flex flex-row flex-nowrap gap-2 justify-center md:gap-4 lg:gap-6 xl:gap-6'>
              {catalogue.map((cat, i) => {
                if (i < 8) {
                  let icon;
                  switch (cat.icon) {
                    case 'LuCable': {
                      icon = <LuCable size={20} />;
                      break;
                    }
                    case 'LuSofa': {
                      icon = <LuSofa size={20} />;
                      break;
                    }
                    case 'PiPlantLight': {
                      icon = <PiPlantLight size={20} />;
                      break;
                    }
                    case 'PiTShirtLight': {
                      icon = <PiTShirtLight size={20} />;
                      break;
                    }
                    case 'AiOutlineHome': {
                      icon = <AiOutlineHome size={20} />;
                      break;
                    }
                    case 'RiCarLine': {
                      icon = <RiCarLine size={20} />;
                      break;
                    }
                    case 'BiDumbbell': {
                      icon = <BiDumbbell size={20} />;
                      break;
                    }
                    case 'IoBagOutline': {
                      icon = <IoBagOutline size={20} />;
                      break;
                    }
                  }
                  return (
                    <div className='flex flex-col items-center cursor-pointer px-2 py-3 rounded-xl hover:bg-gray-200 basis-[12.5%] md:basis-[10%] '>
                      <div className='mb-3'>{icon}</div>
                      <span className='text-xs text-center'>{cat.name}</span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
