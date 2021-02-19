import { combineReducers } from 'redux';

import sidebar from './SidebarReducer';
import shipmentDetails from './ShipmentReducer';
import truckDetails from './TruckReducer';

export default combineReducers({
  sidebar,
  shipmentDetails,
  truckDetails
});
