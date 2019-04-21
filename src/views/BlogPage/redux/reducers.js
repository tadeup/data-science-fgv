import {GOTO_NEXT, GOTO_PREV, LEAVE_PAGE } from "./types";

export const initialState = { lastPost: [null] };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GOTO_NEXT:
      return { ...state, lastPost: [...state.lastPost, action.payload] };
    case GOTO_PREV:
      return {
        ...state,
        lastPost: state.lastPost.length <= 1
          ? [null]
          : state.lastPost.filter((item, index) => index !== state.lastPost.length - 1)
      };
    case LEAVE_PAGE:
      return { ...state, lastPost: [null] };
    default:
      return state
  }
}