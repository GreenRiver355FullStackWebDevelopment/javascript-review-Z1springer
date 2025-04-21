import { calculateStarAverage } from "./logic.js";

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
/*
 Debugged with AI,
 -  Used event.target.reason.value because name="reason" in HTML
 - Replaced renderReview(reviews) with renderReviews(reviews)
 - Passed the correct arguments in renderReviews
*/
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form Submitted");
  const image = event.target.image.value;
  const username = event.target.username.value;
  const starRating = event.target.reason.value;
  const review = event.target.review.value;

  renderReview(image, username, starRating, review);
});

// const starRatings = reviews.map((review) => review.star);
// console.log(calculateStarAverage(starRatings));
const avgStarRating = document.querySelector(".starRating");
avgStarRating.innerHTML = `
    ${calculateStarAverage(reviews)}
`;

const renderReview = (image, username, starRating, review) => {
  const container = document.querySelector(".reviews");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="review_container">
    <img src=${image} />
    <div>
      <p>Username: ${username}</p>
      <p>Star Rating: ${starRating} </p>
      <p>Review: ${review}</p>
    </div>
  </div>
  `;
  container.append(div);
};

const renderReviews = (reviews) => {
  reviews.forEach((review) => {
    renderReview(review.image, review.username, review.star, review.review);
  });
};

renderReviews(reviews);
