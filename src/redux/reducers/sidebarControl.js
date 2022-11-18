import { TOGGLE_MENU } from '../actions';

const initialState = {
  sidebar: false,
};

function sidebarControl(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_MENU:
    return {
      ...state,
      sidebar: !state.sidebar,
    };
  default:
    return state;
  }
}

export default sidebarControl;
