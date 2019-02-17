import { GET_RANDOM_SIDE } from "../actions";

const getSide = () => Math.random() >= 0.5;

const side = (state = getSide(), action) => {
  switch (action.type) {
    case GET_RANDOM_SIDE:
      return getSide();
    default:
      return state;
  }
};

export default side;
