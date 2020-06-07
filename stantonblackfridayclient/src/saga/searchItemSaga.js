import {takeLatest, put, call} from "redux-saga/effects";
import {SEARCH_ITEM, searchItemResponse, searchItemFailure} from "../actions/SearchItemActions";
import axios from 'axios';

async function requestGetSearchItem(search, options) {
    // TODO: manage search and options
    let result = await axios.get("http://localhost:5000/items", {headers: {
         'Access-Control-Allow-Origin':'*',
         'Access-Control-Allow-Credentials': 'true',
    }})
    return {status: result.status, data:result.data};
}

export function *getSearchItem(action) {
    try {
        let requestResult = yield call(requestGetSearchItem, action.data.input, action.data.options)
        yield put(searchItemResponse(requestResult))
    } catch(e) {
        yield put(searchItemFailure());
    }
}

export function* searchItemSaga() {
    yield takeLatest(SEARCH_ITEM, getSearchItem)
}
