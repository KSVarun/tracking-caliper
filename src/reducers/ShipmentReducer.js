import produce from 'immer';

import { ShipmentActionTypes } from '../actions/shipmentActions';

const INITIAL_STATE = {
  total: {
    count: '54',
    amount: '100 Cr',
    initialPercentChange: '+8%',
    finalPercentChange: '-9.9%'
  },
  onTime: {
    count: '26',
    amount: '47 Cr',
    initialPercentChange: '+8%',
    finalPercentChange: '-9.9%'
  },
  delayed: {
    count: '12',
    amount: '27.2 Cr',
    initialPercentChange: '+8%',
    finalPercentChange: '-9.9%'
  },
  deviated: {
    count: '03',
    amount: '9.3 Cr',
    initialPercentChange: '+8%',
    finalPercentChange: '-9.9%'
  },
  missing: {
    count: '07',
    amount: '9.3 Cr',
    initialPercentChange: '+8%',
    finalPercentChange: '-9.9%'
  },
  untracked: {
    count: 3,
    amount: '3.2 Cr',
    initialPercentChange: '+8%',
    finalPercentChange: '-9.9%'
  }
};

export default function ShipmentReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });
}
