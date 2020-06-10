import React from 'react';
import {Route, Redirect, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import HomePageContainer from './components/HomePage/HomePageContainer';
import SearchItemContainer from './components/SearchItem/SearchItemContainer';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers/rootReducer';
import {createStore, applyMiddleware} from 'redux';
import {HeaderBar} from './components/HeaderBar';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';
import InvalidRouteContainer from
  './components/InvalidRoute/InvalidRouteContainer';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

/**
 * @return {ReactNode} The view displayed to the user
 */
function App() {
  return (
    <div className="App" style={{width: '100%', height: '100%'}}>
      <Provider store={store}>
        <BrowserRouter>
          <HeaderBar/>
          <Switch>
            <Redirect exact path="/" to="/home"/>
            <Route exact path="/home" component={HomePageContainer}/>
            <Route exact path="/search-item" component={SearchItemContainer}/>
            <Route path="/" component={InvalidRouteContainer}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
