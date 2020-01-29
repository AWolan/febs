import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { reducer } from './reducers/reducer';
import Page from './pages/Page';

import './style.scss';

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);
library.add(fas);

ReactDOM.render((
  <Provider store={store}>
    <Page />
  </Provider>
), document.querySelector('#faas-app'));
