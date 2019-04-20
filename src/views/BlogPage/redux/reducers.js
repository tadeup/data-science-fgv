import {GO_TO_PREV, GO_TO_NEXT } from "./types";

export const initialState = { lastDates: [] };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GO_TO_NEXT:
      return { ...state, lastDates: [...state.lastDates, action.payload] };
    case GO_TO_PREV:
      return { ...state, lastDates: state.lastDates.filter((item, index) => index !== state.lastDates.length - 1)};
    default:
      return state
  }
}