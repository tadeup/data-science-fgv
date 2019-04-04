import {ADD_FIELD} from "./types"

const initialState = {
  fields: [{title: "", text: "", id: 1}],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIELD:
      return {
        ...state,
        fields: state.fields.concat(action.payload)
      };
    default:
      return state;
  }
};

export default dashboardReducer;