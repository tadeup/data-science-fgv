import {DELETE_IMAGE, UPLOAD_IMAGE, CHANGE_HEADER } from "./types";

export const initialState = { stagedImages: [] };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return { ...state, stagedImages: [...state.stagedImages, action.payload] };
    case DELETE_IMAGE:
      return { ...state, stagedImages: state.stagedImages.filter(item => item !== action.payload)};
    case CHANGE_HEADER:
      return {
        ...state,
        stagedImages: state.stagedImages.map((item, index) => {
          if (index === action.currentHeaderIndex) {
            return {...item, isHeader: false};
          } else if (index === action.newHeaderIndex) {
            return {...item, isHeader: true};
          } else {
            return item;
          }
        })
      };
    default:
      return state
  }
}