import { createStore } from 'redux';
import ContactReducer from '../reducers/ContactReducers';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  contactReducer: ContactReducer,
});

export const store = createStore(reducers);

export type State = ReturnType<typeof reducers>;
