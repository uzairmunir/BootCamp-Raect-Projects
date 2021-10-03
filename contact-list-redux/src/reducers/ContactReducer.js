import {
  REMOVE_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT,
  UPDATE_CONTACT,
} from '../types/Types';

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'Uzair',
      email: 'uzair@gmail.com',
      phone: '03026600578',
    },
    {
      id: 2,
      name: 'Uzair',
      email: 'uzair@gmail.com',
      phone: '03026600578',
    },
  ],
  contact: null,
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case REMOVE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    case EDIT_CONTACT: {
      let arr = state.contacts.filter(
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
    case UPDATE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        ),
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default ContactReducer;
