import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
  const [initialCard, setInitialCard] = useState();
  const [myCards, setMyCards] = useState();
  const { user, loading } = useContext(AuthContext);
  const userName = user ? user.email : null;

  console.log(myCards);
  console.log(initialCard);
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
    return <h2 className={`text-3xl text-center mt-16 ${!user&& 'hidden'}`}>Loading....</h2>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        fetch(`http://localhost:5000/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // const remaining =
              window.location.reload();
            }
          });
      }
    });
  };

  return (
    <div className="my-8">
      {myCards && myCards.length === 0 && (
        <h1 className="text-center text-3xl font-bold mt-44 text-red-600 underline">You have not added any product </h1>
      )}
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
                    <button
                      onClick={() => handleDelete(card._id)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default MyCart;
