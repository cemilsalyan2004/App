import React from 'react';
import { FaCity } from 'react-icons/fa';
import { AiFillCaretRight, AiFillCaretDown } from 'react-icons/ai';
import {
  Collapse,
  Button,
  Card,
  CardBody,
} from '@material-tailwind/react';

import { cities } from './data';

export default function CollapseDefault() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    const rarrow = document.getElementById('rarrow');
    const darrow = document.getElementById('darrow');
    setOpen((cur) => !cur);
    rarrow?.classList.toggle('hidden');
    darrow?.classList.toggle('hidden');
  };

  const newLocal = 'hidden inline-block mb-1';
  return (
    <>
      <Button onClick={toggleOpen} className='space-x-2'>
        <FaCity color='#fff' size={15} className='inline-block mb-1' />
        <span>Şəhər</span>
        <AiFillCaretRight
          id='rarrow'
          color='#fff'
          size={15}
          className='inline-block mb-1'
        />
        <AiFillCaretDown
          id='darrow'
          color='#fff'
          size={15}
          className={newLocal}
        />
      </Button>
      <Collapse open={open}>
        <Card className='my-4 mx-auto 4/5'>
          <CardBody>
						<div className='flex flex-wrap gap-y-2'>
							{cities.map((city, index) => (
								<button className='basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 hover:bg-gray-200 rounded-md' key={index}>{city}</button>
							))}
						</div>
					</CardBody>
        </Card>
      </Collapse>
    </>
  );
}
