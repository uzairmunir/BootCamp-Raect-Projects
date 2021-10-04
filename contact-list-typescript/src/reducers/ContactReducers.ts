import { contactType, editedContactArray } from './../types/Types';
import { Actions, initialStateProps, Types } from '../types/Types';

const initialState: initialStateProps = {
  contacts: [
    {
      id: 1,
      name: 'Uzair',
      email: 'uzair8825@gmail.com',
      phone: '03026600578',
    },
  ],
  contact: null,
};

const ContactReducer = (
  state: initialStateProps = initialState,
  action: Actions
) => {
  switch (action.type) {
    case Types.ADD_CONTACT: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case Types.REMOVE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    case Types.EDIT_CONTACT: {
      let arr: editedContactArray = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    }
    case Types.UPDATE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        ),
      };
    }
    default:
      return state;
  }
};

export default ContactReducer;
