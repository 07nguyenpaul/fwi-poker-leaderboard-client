import {
  FETCH_PLAYERS__REQUEST,
  FETCH_PLAYERS__SUCCESS,
  FETCH_PLAYERS__FAILURE,
  ADD_PLAYER__REQUEST,
  ADD_PLAYER__SUCCESS,
  ADD_PLAYER__FAILURE,
  EDIT_PLAYER__REQUEST,
  EDIT_PLAYER__SUCCESS,
  EDIT_PLAYER__FAILURE,

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
      return { ...state, requesting: false };
    case ADD_PLAYER__REQUEST:
      return { ...state, requesting: true };
    case ADD_PLAYER__SUCCESS:
      const newPlayerList = state.users.concat(action.player);
      return { ...state, users: newPlayerList, requesting: false };
    case ADD_PLAYER__FAILURE:
      return { ...state, requesting: false };
    case EDIT_PLAYER__REQUEST:
      return { ...state, requesting: true };
    case EDIT_PLAYER__SUCCESS:
      const editPlayerList = state.users.map(item => item.id === action.player.id ? action.player : item);
      return { ...state, users: editPlayerList, requesting: false };
    case EDIT_PLAYER__FAILURE:
      return { ...state, requesting: false };
    default:
      return state;
  }
}
