const ApiReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA': {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case 'SET_TERM': {
      return {
        ...state,
        term: action.payload,
      };
    }
    case 'SET_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'REMOVE_TERM': {
      return {
        term: '',
        data: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default ApiReducer;
