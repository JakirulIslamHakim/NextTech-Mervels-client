import { Rating } from '@smastrom/react-rating';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";


const Products = () => {

    const products = useLoaderData();
    // console.log(products);


    return (
        <div>
            <AwesomeSlider className='md:h-[500px]' cssModule={AwesomeSliderStyles}>
                <div data-src={'https://i.ibb.co/bKvRXYV/Education.png'} />
                <div data-src={'https://i.ibb.co/bKvRXYV/Education.png'} />
                <div data-src="/path/to/image-2.jpg" />
            </AwesomeSlider>

            {
                products.length === 0 && <h3 className='text-xl md:text-5xl font-bold text-center my-20'>Sorry ..This Brands Products Stock not available</h3>
            }
            <div className='grid md:grid-cols-2 gap-5 my-14'>
                {
                    products.map(product => <>
                        <div className="card md:card-side bg-base-100 shadow-xl p-5">
                            <figure className='md:w-3/5 md:h-60'><img className='w-full h-full' src={product.image} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <p>{product.productType}</p>
                                <p className='font-bold'>{product.brand}</p>
                                <p className='font-semibold'>{product.price} TK</p>
                                <p>
                                    {<div className="rating">
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-2" className="mask mask-star" checked />
                                        <input type="radio" name="rating-3" className="mask mask-star" />
                                        <input type="radio" name="rating-4" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                    </div>}
                                </p>
                                <div className="card-actions justify-end">
                                    <Link to={`/product/${product._id}`}> <button className="btn btn-primary">Details</button></Link>
                                    <button className="btn btn-primary">Update</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>

            <div>

            </div>

        </div>
    );
};

export default Products;
