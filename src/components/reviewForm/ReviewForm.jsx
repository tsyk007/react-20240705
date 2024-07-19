import classes from "./ReviewsForm.module.css";
import CounterContainer from "../counter/CounterContainer.jsx";
import {
  maxRatingCounterValue,
  minRatingCounterValue,
} from "../../constants/constants.js";
import { useForm } from "./hooks/useForm.jsx";

const ReviewForm = () => {
  const { form, updateName, updateText, updateRating, clearForm } = useForm();

  const updateRatingHandle = (callback) => {
    updateRating(callback(form.rating));
  };

  const updateNameHandle = (event) => {
    updateName(event.target.value);
  };

  const updateTextHandle = (event) => {
    updateText(event.target.value);
  };

  const clearFormHandle = () => {
    clearForm();
  };

  return (
    <div className={classes.form}>
      <label>Имя:</label>
      <input type="text" value={form.name} onChange={updateNameHandle} />
      <label>Текст отзыва:</label>
      <textarea value={form.text} onChange={updateTextHandle}></textarea>
      <label>Рейтинг:</label>
      <CounterContainer
        value={form.rating}
        setValue={updateRatingHandle}
        min={minRatingCounterValue}
        max={maxRatingCounterValue}
      />
      <input type="button" value="Отправить отзыв" onClick={clearFormHandle} />
    </div>
  );
};

export default ReviewForm;
