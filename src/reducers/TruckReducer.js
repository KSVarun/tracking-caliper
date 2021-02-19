import produce from 'immer';

const INITIAL_STATE = {
  missingTruck: [
    {
      tripId: 123456,
      transporter: 'VRL Logistics',
      from: 'Mumbai',
      to: 'Bangalore',
      driverDetails: {
        driverName: 'Rahul',
        driverContact: '+91-978234785'
      },
      lastKnownDetails: {
        location: 'Kolhapur',
        timestamp: '26-Oct-2017,11:12 PM'
      },
      value: '5 Cr'
    }
  ],
  detentionTruck: [
    {
      tripId: 123456,
      transporter: 'VRL Logistics',
      from: 'Mumbai',
      to: 'Bangalore',
      driverDetails: {
        driverName: 'Rahul',
        driverContact: '+91-978234785'
      },
      checkpointDetails: {
        location: 'Kolhapur',
        timestamp: '26-Oct-2017,11:12 PM'
      },
      value: '2 Cr'
    }
  ]
};

export default function TruckReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });
}
