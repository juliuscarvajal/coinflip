import { SET_SIDE, TOGGLE_SIDE } from "../actions";

const getSide = () => Math.random() >= 0.5;

const side = (state = getSide(), action) => {
  switch (action.type) {
    case SET_SIDE:
      return action.payload;
    case TOGGLE_SIDE:
      return !state;
    default:
      return state;
  }
};

export default side;
