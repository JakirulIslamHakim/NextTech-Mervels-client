import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Review = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const userName = user?.displayName;
  const userPhoto = user?.photoURL;

  console.log(userName, userPhoto);

  const handleReview = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const review = { userName, userPhoto, message };
    if (!message) {
      return;
    }

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Thank you",
            // text: "Welcome",
          });
        }
      });
  };

  return (
    <div className="p-3">
      <h1 className="text-4xl font-bold text-center">Customer Review </h1>
      <form onSubmit={handleReview} className="my-10 ">
        <h2 className="text-2xl font-bold mb-5 text-center md:text-left">
          Please,Share your review
        </h2>
        <div>
          <textarea
            maxLength={100}
            name="message"
            placeholder="Please share your short message"
            className="textarea textarea-bordered textarea-lg w-full max-w-xl"
          ></textarea>
        </div>
        <div className="text-center md:text-left">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Review;
