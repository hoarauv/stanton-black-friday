import { all } from 'redux-saga/effects';
import { searchItemSaga } from './searchItemSaga';   

export default function* rootSaga() {
    yield all([
        searchItemSaga()
    ]);
}