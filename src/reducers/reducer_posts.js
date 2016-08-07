import { FETCH_POSTS, FETCH_POST } from '../actions/action_dictionary';
const INITIAL_STATE = {
  all: [],
  post: null
};

export default function(state=INITIAL_STATE, action){
  switch(action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, {
        all: action.payload.data
      });
      //the method below is not part of ES6 yet to add data into an object.
      //return { ...state, all: action.payload.data };
    case FETCH_POST:
      return Object.assign({}, state, {
        post: action.payload.data
      });
    case FETCH_POST:
      return Object.assign({}, state, {
        post: action.payload.data
      });
    default:
      return state;
  }
}
