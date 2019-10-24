import { REGISTER_REQUEST } from '../actions/types';

const initialState = {

  item: {}
};

export default function (state = initialState, action) {
  console.log("payload---->", action.payload)
  console.log("state---->", initialState)
  
  switch (action.type) {

    case REGISTER_REQUEST:
      return {
        ...state, //copies the state
        item: action.payload

      };

    default:
      return state;
  }
}
