export type initialStateProps = {
  contacts: {
    id: number;
    name: string;
    email: string;
    phone: string;
  }[];
  contact: null | { id: number; name: string; email: string; phone: string };
};

export type contactType = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export enum Types {
  ADD_CONTACT = 'ADD_CONTACT',
  REMOVE_CONTACT = 'REMOVE_CONTACT',
  EDIT_CONTACT = 'EDIT_CONTACT',
  UPDATE_CONTACT = 'UPDATE_CONTACT',
}
export type contactsPropsType = {
  contacts: {
    id: number;
    name: string;
    email: string;
    phone: string;
  };
};

export type Actions =
  | { type: Types.ADD_CONTACT; payload: contactType }
  | { type: Types.REMOVE_CONTACT; payload: number }
  | { type: Types.EDIT_CONTACT; payload: number }
  | { type: Types.UPDATE_CONTACT; payload: contactType };

export type editedContactArray =
  | {
      id: number;
      name: string;
      email: string;
      phone: string;
    }[]
  | { id: number; name: string; email: string; phone: string };
