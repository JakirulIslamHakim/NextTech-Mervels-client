import { useLoaderData } from "react-router-dom";

const Details = () => {
    const product = useLoaderData();

    const { name, image, brand, price, productType, description } = product;
    console.log(image);

    const handleAddCart =()=>{
        fetch('http://localhost:5000/addCart',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
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