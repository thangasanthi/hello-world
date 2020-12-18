import { OPEN, CLOSE } from "./helloTypes";

export const open = () => {
  return {
    type: OPEN,
    payload: true,
  };
};

export const close = () => {
  return {
    type: CLOSE,
    payload: false,
  };
};
