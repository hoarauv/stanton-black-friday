/*
 * action types
 */

export const SEARCH_ITEM = 'SEARCH_ITEM';
export const SEARCH_ITEM_RESPONSE = 'SEARCH_ITEM_RESPONSE';
export const SEARCH_ITEM_FAILURE = 'SEARCH_ITEM_FAILURE';

/*
 * action creators
 */

export const searchItem = (data) => ({ type: SEARCH_ITEM, data});
export const searchItemResponse = (data) => ({type: SEARCH_ITEM_RESPONSE, data: data})
export const searchItemFailure = () => ({type: SEARCH_ITEM_FAILURE})