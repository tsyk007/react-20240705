import {
  CLEAR_FORM,
  SET_NAME,
  SET_RATING,
  SET_TEXT,
} from "../constants/actions.js";
import { INITIAL_FORM } from "../constants/initialForm.js";

export function formReducer(state, { type, payload }) {
  switch (type) {
    case SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case SET_TEXT:
      return {
        ...state,
        text: payload,
      };
    case SET_RATING:
      return {
        ...state,
        rating: payload,
      };
    case CLEAR_FORM:
      return {
        ...INITIAL_FORM,
      };
    default:
      return state;
  }
}
