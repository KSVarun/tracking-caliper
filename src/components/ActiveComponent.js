import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import Trips from '../components/Trips';
import Tracking from '../components/Tracking';
import Transporters from '../components/Transporters';
import Analytics from '../components/Analytics';
import Settings from '../components/Settings';

import '../styles/ActiveComponent.scss';

function ActiveComponent(props) {
  function renderActiveTab() {
    switch (props.activeSidebar) {
      case 2:
        return <Dashboard />;
      case 3:
        return <Trips />;
      case 4:
        return <Tracking />;
      case 5:
        return <Transporters />;
      case 6:
        return <Analytics />;
      case 7:
        return <Settings />;
      default:
        <Dashboard />;
    }
  }
  return <div className='active-component'>{renderActiveTab()}</div>;
}
const mapStateToProps = (state) => {
  const activeSidebar = state.sidebar.activeOptionId;
  return { activeSidebar: activeSidebar };
};

export default connect(mapStateToProps, {})(ActiveComponent);
