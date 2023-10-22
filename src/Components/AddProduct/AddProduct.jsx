import { useEffect } from "react";
import { useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { useState } from "react";


const AddProduct = () => {
    const { user} = useContext(AuthContext);
    
    const nameRef = useRef();
    useEffect(() => {
        nameRef.current.focus();
    }, [])



    const handleAddProduct = (e) => {
        e.preventDefault();
        const userEmail = user.email;

        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const productType = form.productType.value;
        const brand = form.brand.value;
        const description = form.description.value;

        const productDetails = { name, image, price, rating, productType, brand, description, userEmail };
        // console.log(productDetails);

        fetch('http://localhost:5000/addProduct',{
            method:"POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(productDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <form onSubmit={handleAddProduct} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input ref={nameRef} type="text" name="name" placeholder="Product Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image </span>
                    </label>
                    <input type="text" name="image" placeholder="Product Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price </span>
                    </label>
                    <input type="text" name="price" placeholder="Product Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating </span>
                    </label>
                    <input type="number" name="rating" placeholder="Product Rating" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Type</span>
                    </label>
                    <select name="productType" defaultValue={'phone'} className="select select-bordered w-full " required>
                        {/* <option disabled selected>Select your product type .</option> */}
                        <option value={'phone'}>Phone</option>
                        <option>Computer</option>
                        <option>Headphone</option>
                        <option>Watch</option>
                        <option>Laptop</option>
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand </span>
                    </label>
                    <select name="brand" defaultValue={'google'} className="select select-bordered w-full " required>
                        {/* <option disabled selected>Select your brand .</option> */}
                        <option value={'google'} >Google</option>
                        <option value={'apple'}>Apple</option>
                        <option value={'samsung'}>Samsung</option>
                        <option value={'walton'}>Walton</option>
                        <option value={'oppo'}>Oppo</option>
                        <option value={'mi'}>Mi</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product details </span>
                    </label>
                    <textarea name="description" placeholder="Write short description" className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Your product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;