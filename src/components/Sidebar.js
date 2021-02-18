import React, { useState } from 'react';
import { connect } from 'react-redux';

import Dashboard from '../icons/dashboard.svg';
import Trips from '../icons/trips.svg';
import Tracking from '../icons/tracking.svg';
import Transporters from '../icons/transporters.svg';
import Analytics from '../icons/analytics.svg';
import Settings from '../icons/settings.svg';

import { openOption } from '../actions/sidebarActions';

import '../styles/Sidebar.scss';

function Sidebar(props) {
  let [sidebarItems, setSidebarItems] = useState([
    { id: 1, name: 'tEg', selected: false, icon: '' },
    { id: 2, name: 'Dashboard', selected: true, icon: Dashboard },
    { id: 3, name: 'Trips', selected: false, icon: Trips },
    { id: 4, name: 'Tracking', selected: false, icon: Tracking },
    { id: 5, name: 'Transporters', selected: false, icon: Transporters },
    { id: 6, name: 'Analytics', selected: false, icon: Analytics },
    { id: 7, name: 'Settings', selected: false, icon: Settings }
  ]);

  const handleSideBarItemClick = (id) => {
    if (id !== 1) {
      let updatedSideBarItems = [...sidebarItems];
      updatedSideBarItems.forEach((item) => {
        if (item.id === id) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
      props.openOption(id);
      setSidebarItems(updatedSideBarItems);
    }
  };
  function renderComponents() {
    return sidebarItems.map((item) => {
      return (
        <div
          className={`sidebar-item ${item.selected}`}
          onClick={() => handleSideBarItemClick(item.id)}
          key={item.id}
        >
          <img className='logo' src={item.icon} alt={`${item.name}-logo`}></img>
          <div className='item-name'>{item.name}</div>
        </div>
      );
    });
  }

  return <div className='sidebar-section'>{renderComponents()}</div>;
}

export default connect(null, { openOption })(Sidebar);
