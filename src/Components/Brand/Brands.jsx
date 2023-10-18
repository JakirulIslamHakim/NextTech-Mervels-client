import { useEffect, useState } from "react";

const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className="my-10">
            <h className='text-4xl text-center font-bold '>Our Products</h>
            <div className="mx-auto p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    brands.map(brand => <>
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure className="h-48"><img className="w-full" src={brand.brandImage} alt="Shoes" /></figure>
                            <div className="card-bod p-6">
                                <h2 className="text-3xl font-bold text-center">{brand.brandName}</h2>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Brands;