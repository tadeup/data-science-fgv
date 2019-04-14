import {DELETE_IMAGE, UPLOAD_IMAGE} from "./types";

export const initialState = { stagedImage: null };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return { ...state, stagedImage: action.payload };
    case DELETE_IMAGE:
      return state;
    default:
      return state
  }
}