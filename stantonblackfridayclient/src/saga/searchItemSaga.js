import {takeLatest, put, call} from 'redux-saga/effects';
import {SEARCH_ITEM, searchItemResponse, searchItemFailure} from
  '../actions/SearchItemActions';
import axios from 'axios';

/**
 * The async method called to search items : holds the technical logic of axios
 * @param {string} search - The filter used
 * @param {object} options - The options used for the query (orderby, limit..)
 */
async function requestGetSearchItem(search, options) {
  // TODO: manage search and options
  const result = await axios.get('http://localhost:5000/items', {headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  }});
  return {status: result.status, data: result.data};
}

/**
 * Represents the steps needed to request to the api and handle the api answer
 * @param {object} action - The action that led to this request
 */
function* getSearchItem(action) {
  try {
    const requestResult = yield call(
        requestGetSearchItem,
        action.data.input,
        action.data.options,
    );
    yield put(searchItemResponse(requestResult));
  } catch (e) {
    yield put(searchItemFailure());
  }
}

/**
 * Represents the asynchronous process of searching items in the database
 */
export function* searchItemSaga() {
  yield takeLatest(SEARCH_ITEM, getSearchItem);
}
