import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import SafeThunk from './middleware/SafeThunk';
import User from '../redux/reducers/User';
import Cart from '../redux/reducers/Cart';

const enhancers = [];
if (
    process.env.REACT_APP_ENV === "Development" ||
    process.env.REACT_APP_ENV === "Local"
  ) {
    // add support for Redux dev tools
    const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

const reducers = { User, Cart };
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, SafeThunk), ...enhancers);