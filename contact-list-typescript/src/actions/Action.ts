import { contactType, Types } from '../types/Types';

//Action to Add new Contact
export const addNewContact = (contact: contactType) => {
  return {
    type: Types.ADD_CONTACT,
    payload: contact,
  };
};
//Action to Remove Contact
export const removeContact = (id: number) => {
  return {
    type: Types.REMOVE_CONTACT,
    payload: id,
  };
};
//Action to Edit Contact
export const editContact = (id: number) => {
  return {
    type: Types.EDIT_CONTACT,
    payload: id,
  };
};
//Action to update contact
export const updateContact = (contact: contactType) => {
  return {
    type: Types.UPDATE_CONTACT,
    payload: contact,
  };
};
