export const SET_SIDE = "SET_SIDE";
export const TOGGLE_SIDE = "TOGGLE_SIDE";

export const setSide = side => ({
  type: SET_SIDE,
  payload: side
});

export const toggleSide = () => ({
  type: TOGGLE_SIDE
});
