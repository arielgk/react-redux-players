import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import {getPlayers} from './actions/playerActions';
import initialState from './store/initialState';

const store = configureStore(initialState);

store.dispatch(getPlayers());


ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);

