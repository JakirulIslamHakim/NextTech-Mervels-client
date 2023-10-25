import { useState } from "react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

const ShowReview = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  console.log(reviews);
  return (
    <div className="my-10">
        <h2 className="text-4xl text-center mb-10 font-bold">Our Customer Awsome Review</h2>
      <Marquee direction= {"right"} speed={30}>
        <div className="flex gap-5">
          {reviews?.map((review) => (
            <>
              <div>
                <div className="card  bg-base-100 shadow-xl w-52  md:w-64 border">
                  <div className="flex-grow">
                    <img
                      className="w-[100px] mx-auto rounded-full"
                      src={review?.userPhoto ? review.userPhoto:"https://i.ibb.co/hmGjdtS/user.png"}
                      alt=""
                    />
                    <h2 className="text-xl font-medium text-center mt-4">
                      {review?.userName ?review.userName: 'User'}
                    </h2>
                  </div>
                  <div className="card-body">
                    <p className="text-justify">{review?.message}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ShowReview;
