import {
  ADD_CONTACT,
  EDIT_CONTACT,
  REMOVE_CONTACT,
  UPDATE_CONTACT,
} from '../types/Types';

//Action to Add new Contact
export const addNewContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};
//Action to Remove Contact
export const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    payload: id,
  };
};
//Action to Edit Contact
export const editContact = (id) => {
  return {
    type: EDIT_CONTACT,
    payload: id,
  };
};
//Action to update contact
export const updateContact = (contact) => {
  return {
    type: UPDATE_CONTACT,
    payload: contact,
  };
};
