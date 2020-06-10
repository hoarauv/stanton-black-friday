import {SEARCH_ITEM_RESPONSE, SEARCH_ITEM_FAILURE}
  from '../actions/SearchItemActions';

const initialSearchState = {
  computing: true,
  lastSearch: '',
  items: [],
};

/**
 * Reducer handling the state of the searchs done by the user, and the actions
 * that he can do.
 * @param {object} state - Current state
 * @param {object} action - Incoming action
 * @return {object} - New State, after this action
 */
export function searchItemReducer(state = initialSearchState, action) {
  switch (action.type) {
    case SEARCH_ITEM_RESPONSE:
      return {
        ...state,
        type: action.type,
        items: action.data.data,
        computing: false,
      };
    case SEARCH_ITEM_FAILURE:
      return {...state, type: action.type, items: [], computing: false};
    default:
      return state;
  }
}
