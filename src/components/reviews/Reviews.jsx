import classes from "./Reviews.module.css";
import ReviewForm from "../reviewForm/ReviewForm.jsx";

const Reviews = ({ reviewItems }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviewItems.length > 0
          ? reviewItems.map((item) => <li key={item.id}>{item.text}</li>)
          : null}
      </ul>
      <div className={classes.reviewForm}>
        <ReviewForm />
      </div>
    </div>
  );
};

export default Reviews;
