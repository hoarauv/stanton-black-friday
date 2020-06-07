import {SEARCH_ITEM_RESPONSE, SEARCH_ITEM_FAILURE} from '../actions/SearchItemActions';

const initialSearchState = {
  computing: true,
  lastSearch: '',
  items: [],
};

export function searchItemReducer(state = initialSearchState, action) {
  switch (action.type) {
    case SEARCH_ITEM_RESPONSE:
      return {...state, type: action.type, items: action.data.data, computing: false};
    case SEARCH_ITEM_FAILURE:
      return {...state, type: action.type, items: [], computing: false};
    default:
      return state;
  }
}
