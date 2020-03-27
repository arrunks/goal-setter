import rootReducer from './reducers';
import { createStore, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));