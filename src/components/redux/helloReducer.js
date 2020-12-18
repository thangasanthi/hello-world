import { OPEN, CLOSE } from "./helloTypes";

const initialState = {
  isOpen: false,
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    case CLOSE:
      return {
        ...state,
        isOpen: action.payload,
      };

    default:
      return state;
  }
};

export default helloReducer;
