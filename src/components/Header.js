import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

import Search from '../icons/search.svg';
import Bell from '../icons/bell.svg';

import '../styles/Header.scss';

function Header() {
  let [notification, setNotification] = useState('block');
  let [searchString, setSearchString] = useState('');
  const options = [
    { key: 'tr', value: 'tr', text: 'Tracking' },
    { key: 'sh', value: 'sh', text: 'Shipment' }
  ];
  return (
    <div className='header-section'>
      <div className='options'>
        <Dropdown placeholder='Select Type' fluid selection options={options} />
      </div>
      <div className='vertical-divider'></div>
      <div className='search-filed'>
        <img src={Search} alt='search-icon'></img>
        <input
          type='text'
          placeholder='Search by docket no, trip no, transporter, driver name'
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        ></input>
      </div>
      <div className='notification'>
        <img src={Bell} alt='bell-icon'></img>
        <div
          className='active-notification'
          style={{ display: notification }}
        ></div>
      </div>
    </div>
  );
}

export default Header;
