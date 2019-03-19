import {
  FETCH_PLAYERS__REQUEST,
  FETCH_PLAYERS__SUCCESS,
  FETCH_PLAYERS__FAILURE,
} from '../actions/actionTypes';

const initialState= {
  users: [],
  requesting: false,
};

export default function players(state=initialState, action) {
  switch (action.type) {
    case FETCH_PLAYERS__REQUEST:
      return { ...state, requesting: true };
    case FETCH_PLAYERS__SUCCESS:
      return { ...state, users: action.users, requesting: false };
    case FETCH_PLAYERS__FAILURE:
      return { ...state, players: [], requesting: true };
    default:
      return state;
  }
}
