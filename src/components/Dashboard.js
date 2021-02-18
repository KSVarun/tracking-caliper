import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

import Tabs from '../components/Tabs';

function Dashboard() {
  const transporterOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Ashoka Leyland' },
    { key: 'ta', value: 'ta', flag: 'ta', text: 'Tata Motors' }
  ];
  const plantDepotOptions = [
    { key: 'mb', value: 'mb', flag: 'mb', text: 'Mumbai Plant' },
    { key: 'ba', value: 'ba', flag: 'ba', text: 'Bangalore Plant' }
  ];
  const itemOptions = [
    { key: 'pa', value: 'pa', flag: 'pa', text: 'Care Package' },
    { key: 'gr', value: 'gr', flag: 'gr', text: 'Grocery' }
  ];
  let [tabs, setTabs] = useState([
    { id: 1, name: 'All', selected: true, count: 54 },
    { id: 2, name: 'FTL', selected: false, count: 26 },
    { id: 3, name: 'LCL', selected: false, count: 16 },
    { id: 4, name: 'Courier', selected: false, count: 10 },
    { id: 5, name: 'Container', selected: false, count: 3 }
  ]);
  let [statusTabs, setStatusTabs] = useState([
    { id: 1, name: 'Inbound', selected: true, count: 30 },
    { id: 2, name: 'Outbound', selected: false, count: 16 }
  ]);

  function handleTabSelect(id) {
    let updatedTabs = [...tabs];
    updatedTabs.forEach((item) => {
      if (item.id === id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    setTabs(updatedTabs);
  }
  function handleStatusTabSelect(id) {
    let updatedStatusTabs = [...statusTabs];
    updatedStatusTabs.forEach((item) => {
      if (item.id === id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    setStatusTabs(updatedStatusTabs);
  }
  return (
    <div className='dashboard-section'>
      <div className='tabs-section'>
        <Tabs tabs={tabs} onSelect={(id) => handleTabSelect(id)} />
        <Tabs tabs={statusTabs} onSelect={(id) => handleStatusTabSelect(id)} />
      </div>
      <div className='search-section'>
        <Dropdown
          placeholder='Select transporter'
          fluid
          search
          selection
          options={transporterOptions}
        />
        <Dropdown
          placeholder='Select plant/depot'
          fluid
          search
          selection
          options={plantDepotOptions}
        />
        <Dropdown
          placeholder='Select item'
          fluid
          search
          selection
          options={itemOptions}
        />
      </div>
    </div>
  );
}

export default Dashboard;
