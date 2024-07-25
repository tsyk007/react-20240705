import classes from "./ReviewsForm.module.css";
import { useForm } from "./hooks/useForm.jsx";
import Counter from "../counter/Counter.jsx";
import { useCallback } from "react";

const ReviewForm = () => {
  const {
    form,
    updateName,
    updateText,
    clearForm,
    increaseRating,
    decreaseRating,
  } = useForm();

  const updateNameHandle = useCallback(
    (event) => {
      updateName(event.target.value);
    },
    [updateName],
  );

  const updateTextHandle = useCallback(
    (event) => {
      updateText(event.target.value);
    },
    [updateText],
  );

  return (
    <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
      <label>Имя:</label>
      <input type="text" value={form.name} onChange={updateNameHandle} />
      <label>Текст отзыва:</label>
      <textarea value={form.text} onChange={updateTextHandle}></textarea>
      <label>Рейтинг:</label>
      <Counter
        decrease={decreaseRating}
        increase={increaseRating}
        value={form.rating}
      />
      <input type="button" value="Отправить отзыв" onClick={clearForm} />
    </form>
  );
};

export default ReviewForm;
