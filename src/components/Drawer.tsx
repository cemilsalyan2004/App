import React from 'react';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { AiFillAppstore } from 'react-icons/ai';

import { catalogue } from './data';

export function DrawerDefault() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <div className='pr-4 py-4 lg:pl-8 order-1 sm:order-none'>
        <AiFillAppstore
          size={30}
          onClick={openDrawer}
          className='cursor-pointer'
        />
      </div>
      <Drawer open={open} onClose={closeDrawer} className='p-4'>
        <div className='mb-6 flex items-center justify-between'>
          <Typography variant='h5' color='blue-gray'>
            Kataloq
          </Typography>
          <IconButton variant='text' color='blue-gray' onClick={closeDrawer}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </IconButton>
        </div>
        <div className='flex gap-2 flex-col'>
          {catalogue.map((cat, index) => (
            <div
              className='border-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-200'
              key={index}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </Drawer>
    </React.Fragment>
  );
}
