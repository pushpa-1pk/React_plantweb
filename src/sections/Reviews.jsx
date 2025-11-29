import ReviewCard from "../components/ReviewCard"
import { reviews } from "../data/reviews"

const Reviews = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10 mt-25">
      {reviews.map((item) => (
        <ReviewCard
          key={item.id}
          img={item.img}
          name={item.name}
          comment={item.comment}
        />
      ))}
    </div>
  );
};

export default Reviews
