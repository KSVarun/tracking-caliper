export const ShipmentActionTypes = {
  SET_SHIPMENT_DETAILS: 'SET_SHIPMENT_DETAILS'
};

export function setShipmentDetails(data) {
  return {
    type: ShipmentActionTypes.SET_SHIPMENT_DETAILS,
    payload: {
      shipmentDetails: data
    }
  };
}
