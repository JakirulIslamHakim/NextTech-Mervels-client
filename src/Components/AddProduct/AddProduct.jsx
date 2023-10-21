import { useEffect } from "react";
import { useRef } from "react";


const AddProduct = () => {

    const nameRef = useRef();
    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const productType = form.productType.value;
        const brand = form.brand.value;
        const description = form.description.value;

        // console.log(name,image,price,rating,productType,brand,description);

        const productDetails = {name,image,price,rating,productType,brand,description};
        console.log(productDetails);
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
                    <select name="productType" className="select select-bordered w-full ">
                        <option disabled selected>Select your product type .</option>
                        <option>Phone</option>
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
                    <select name="brand" className="select select-bordered w-full ">
                        <option disabled selected>Select your brand .</option>
                        <option>Google</option>
                        <option>Apple</option>
                        <option>Samsung</option>
                        <option>Walton</option>
                        <option>Oppo</option>
                        <option>Mi</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product details </span>
                    </label>
                    <textarea name="description" placeholder="Write short description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Your product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;