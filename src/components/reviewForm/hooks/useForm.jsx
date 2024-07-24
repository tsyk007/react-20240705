import { useReducer } from "react";
import { INITIAL_FORM } from "./constants/initialForm.js";
import { formReducer } from "./formReducer/FormReducer.js";
import {
  CLEAR_FORM,
  SET_NAME,
  SET_RATING,
  SET_TEXT,
} from "./constants/actions.js";
import {
  maxRatingCounterValue,
  minRatingCounterValue,
} from "../../../constants/constants.js";

export const useForm = () => {
  const [form, dispatch] = useReducer(formReducer, INITIAL_FORM);

  const updateName = (name) => dispatch({ type: SET_NAME, payload: name });
  const updateText = (text) => dispatch({ type: SET_TEXT, payload: text });
  const updateRating = (rating) =>
    dispatch({ type: SET_RATING, payload: rating });
  const increaseRating = () =>
    updateRating(Math.min(maxRatingCounterValue, form.rating + 1));
  const decreaseRating = () =>
    updateRating(Math.max(minRatingCounterValue, form.rating - 1));
  const clearForm = () => dispatch({ type: CLEAR_FORM, payload: "" });

  return {
    form,
    updateName,
    updateText,
    updateRating,
    increaseRating,
    decreaseRating,
    clearForm,
  };
};
