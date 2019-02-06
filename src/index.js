import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots, requestRobot } from './reducer';


const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobot});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
