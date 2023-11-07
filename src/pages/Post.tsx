import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import { cities } from '../components/data';
import { ChooseCat } from '../components/ChooseCat';

import { MdPhotoCamera } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';

const Post: React.FC = () => {
  return (
    <div className='rounded-lg shadow-md px-10 py-4 bg-white mb-2'>
      <h1 className='text-xl font-semibold mb-4 mt-6'>Elan yerləşdirin</h1>
      <form>
        <p className='font-medium mb-3'>
          Şəkilləri yükləyin{' '}
          <span className='text-xs text-gray-700'>(maksimum 30)</span>
        </p>
        <label
          htmlFor='image'
          className='border cursor-pointer w-[230px] h-[230px] rounded-lg bg-gray-200 flex flex-col items-center justify-center gap-1 mb-6'
        >
          <MdPhotoCamera size={35} />
          <p className='text-sm'>Fotoşəkil əlavə edin</p>
          <p className='text-xs w-[85%] text-center'>
            Əsas şəkil axtarış nəticələrində əks olunacaq
          </p>
        </label>
        <input type='file' name='image' id='image' className='hidden' />
        <label htmlFor='desc' className='inline-block mb-2'>
          Təsvir
        </label>
        <textarea
          name='desc'
          id='desc'
          rows={4}
          className='resize-none block border-gray-400 border-2 rounded-lg outline-none focus:border-primary p-2 mb-6 w-[300px] sm:w-[470px]'
        />
        <label htmlFor='category' className='inline-block mb-2'>
          Kateqoriya
        </label>
        <ChooseCat />
        <label htmlFor='city' className='inline-block mb-3 mt-6'>
          Şəhər
        </label>
        <div className='w-72' id='city'>
          <Select label='Şəhər seçin'>
            {cities.map((city, i) => (
              <Option key={i}>{city}</Option>
            ))}
          </Select>
        </div>
        <label htmlFor='price' className='inline-block mb-3 mt-6'>
          Qiymət
        </label>
        <input
          type='text'
          id='price'
          name='price'
          placeholder='&#8380;'
          className='border-gray-400 border py-2 px-3 block rounded-lg outline-none focus:border-primary w-[288px]'
        />
        <label htmlFor='number' className='inline-block mb-3 mt-6'>
          Telefon
        </label>
        <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
          <div className='flex items-center border px-3 py-2 rounded-lg border-gray-400 gap-3 w-max'>
            <label htmlFor='number' className='flex items-center gap-2'>
              <FiPhone />
              <p>
                <span className='text-sm'>+</span>994
              </p>
            </label>
            <input
              type='text'
              name='number'
              id='number'
              className='outline-none border-none w-[185px]'
              placeholder='XX XXX XX XX'
              onFocus={(e) => {
                (e.target.closest('div') as HTMLDivElement).style.border =
                  '1px solid #3522e3';
              }}
              onBlur={(e) => {
                (e.target.closest('div') as HTMLDivElement).style.border =
                  '1px solid #bdbdbd';
              }}
            />
          </div>
          <div className='flex items-center gap-2 text-gray-700'>
            <input type='checkbox' name='showNumber' id='showNumber' />
            <label htmlFor="showNumber">Nömrəni gizlət</label>
          </div>
        </div>
        <button type='submit' className='bg-primary text-white mt-10 px-4 py-2 rounded-lg'>Elanı dərc et</button>
      </form>
    </div>
  );
};

export default Post;
