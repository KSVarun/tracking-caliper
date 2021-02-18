import React from 'react';

import '../styles/Tabs.scss';

function Tabs(props) {
  function renderTabs() {
    return props.tabs.map((tab) => {
      return (
        <div
          className={`individual-tab ${tab.selected}`}
          onClick={() => props.onSelect(tab.id)}
          key={tab.id}
        >
          <div className='tab-name'>{tab.name}</div>
          <div className='count'>{`(${tab.count})`}</div>
        </div>
      );
    });
  }
  return <div className='tabs-section'>{renderTabs()}</div>;
}

export default Tabs;
