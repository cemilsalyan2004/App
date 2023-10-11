import React from 'react';

import CollapseDefault from '../components/Collapse';

const Main: React.FC = () => {
  return (
    <div className='rounded-lg shadow-md px-4 py-4 bg-white mb-2'>
      <div className='px-8 space-x-3'>
				<span className='font-semibold'>Yeni Elanlar</span>
				<CollapseDefault />
			</div>
    </div>
  );
};

export default Main;
