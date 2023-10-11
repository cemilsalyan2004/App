import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import Main from './pages/Main';

function App() {
  return (
    <div className='max-w-[1500px] mx-auto p-3'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
