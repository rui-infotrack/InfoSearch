import { createAction } from 'utils';
import {
  CHANGE_SEARCH_TYPE
} from 'constants/ActionTypes';

// export const changeSearchType = createAction(CHANGE_SEARCH_TYPE, 'searchType');
export function changeSearchType(searchType) {
  return {
    type: CHANGE_SEARCH_TYPE,
    searchType
  };
}
