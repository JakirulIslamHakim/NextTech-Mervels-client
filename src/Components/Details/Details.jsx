import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Details = () => {
    const product = useLoaderData();
    const {user} = useContext(AuthContext);
    const userEmail = user.email;

    const { name, image, brand, price, productType, description } = product;
    const productWithEmail = {...product,userEmail};
    console.log(productWithEmail);

    const handleAddCart =()=>{
        fetch('https://nex-tech-marvels-server-ae3iinbfs-jakirulislamhakim.vercel.app/addCart',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(productWithEmail)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.acknowledged){
                Swal.fire({
                    icon: 'success',
                    title: 'Add product',
                    text: 'Please, check my cart page',
                  })
            }
        })
    }

    return (
        <div className="min-h-screen">
            <div className="card glass ">
                <figure className=" md:h-[600px] w-full"><img className="w-full h-full" src={image} alt="car!" /></figure>
                <div className="p-2">
                    <div className="flex justify-between items-center content-center p-3">
                        <h1 className="text-2xl md:text-5xl font-bold">{name}</h1>
                        <p className="md:text-xl font-bold">{price} Tk</p>
                    </div>
                    <p className="text-3xl text-center font-semibold">{brand}</p>
                    <p className="py-6 font-bold">About {productType} : {description}</p>
                    <button onClick={handleAddCart} className="btn btn-primary w-full">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;