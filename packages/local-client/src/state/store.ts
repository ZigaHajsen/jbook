import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistMiddleware } from './middlewares';
import reducers from './reducers';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, persistMiddleware)
);
