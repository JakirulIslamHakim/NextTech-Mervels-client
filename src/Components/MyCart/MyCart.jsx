import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [myCards, setMyCards] = useState();
  const { user, loading } = useContext(AuthContext);
  const userName = user ? user.email : null;

  // if(loading){
  //     return <>Loading</>
  // }

  useEffect(() => {
    if (userName) {
      fetch(`http://localhost:5000/myCart/${userName}`)
        .then((res) => res.json())
        .then((data) => {
          setMyCards(data);
        })
        .catch((err) => console.log(err));
    }
  }, [userName]);

  if (!userName) {
    return <h2 className="text-3xl text-center mt-16">Loading....</h2>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-5 p-2">
      {myCards &&
        myCards.map((card) => (
          <>
            <div className="card  bg-base-100 shadow-xl">
              <figure>
                <img src={card.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.name}</h2>
                <p className="font-semibold">{card.brand}</p>
                <p className="font-semibold">Price: {card.price}Tk</p>
                <p className="font-semibold">Rating:{card.rating} out of 5</p>
                <p>
                  <span className="underline">
                    About this {card.productType}
                  </span>{" "}
                  : {card.description}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`delete/${card._id}`}>
                    <button className="btn btn-primary">Delete</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default MyCart;
