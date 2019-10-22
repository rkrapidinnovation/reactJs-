import { REGISTER_REQUEST } from '../actions/types';

const initialState = {
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    
    case REGISTER_REQUEST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
