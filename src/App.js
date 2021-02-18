import React from 'react';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ActiveComponent from './components/ActiveComponent';

import './styles/App.scss';

function App() {
  return (
    <div className='App'>
      <div className='left-section'>
        <Sidebar />
      </div>
      <div className='right-section'>
        {' '}
        <Header />
        <ActiveComponent />
      </div>
    </div>
  );
}

export default App;
