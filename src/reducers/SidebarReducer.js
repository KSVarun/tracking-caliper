import produce from 'immer';

import { SidebarActionTypes } from '../actions/sidebarActions';

const INITIAL_STATE = {
  activeOptionId: 2
};

export default function SidebarReducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SidebarActionTypes.OPEN_OPTION:
        draft.activeOptionId = action.payload.id;
        break;
      default:
        break;
    }
  });
}
