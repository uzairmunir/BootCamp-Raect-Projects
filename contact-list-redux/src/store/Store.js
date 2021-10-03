import { createStore } from 'redux';
import ContactReducer from '../reducers/ContactReducer';

export const store = createStore(ContactReducer);
