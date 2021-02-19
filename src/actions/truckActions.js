export const TruckActionTypes = {
  SET_TRUCK_DETAILS: 'SET_TRUCK_DETAILS'
};

export function setTruckDetails(data) {
  return {
    type: TruckActionTypes.SET_TRUCK_DETAILS,
    payload: {
      truckDetails: data
    }
  };
}
