import { createReducer, setState } from 'utils';
import { CHANGE_SEARCH_TYPE } from 'constants/ActionTypes';

const initialState = {
  type: null
};

export default createReducer(initialState, {
  [CHANGE_SEARCH_TYPE](state, action) {
    const { searchType } = action;

    return setState(state, { type: searchType });
  }
});
