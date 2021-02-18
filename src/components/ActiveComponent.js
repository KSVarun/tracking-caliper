import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/Dashboard';
import Trips from '../components/Trips';

import '../styles/ActiveComponent.scss';

function ActiveComponent(props) {
  function renderActiveTab() {
    debugger;
    switch (props.activeSidebar) {
      case 2:
        return <Dashboard />;
      case 3:
        return <Trips />;
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
