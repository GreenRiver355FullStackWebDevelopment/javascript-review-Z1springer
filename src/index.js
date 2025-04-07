import roseImg from "../images/rose.png";
import avatarOneImg from "../images/avatar1.png";
import avatarTwoImg from "../images/avatar2.png";

//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////
function App() {
  const renderReview = reviews.forEach((review) => {
    <div className="review_container">
      <img src={review.image} />
      <div>
        <p>Username: {review.username}</p>
        <p>Star Rating:{review.star} </p>
        <p>Review: {review.review}</p>
      </div>
      ;
    </div>;
  });
  console.log(renderReview());
  return <>{renderReview()}</>;
}

export default App;
