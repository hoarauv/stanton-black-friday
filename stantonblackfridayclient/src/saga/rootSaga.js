import {all} from 'redux-saga/effects';
import {searchItemSaga} from './searchItemSaga';

/**
 * root function holding all the Saga logic of this app
 */
export default function* rootSaga() {
  yield all([
    searchItemSaga(),
  ]);
}
