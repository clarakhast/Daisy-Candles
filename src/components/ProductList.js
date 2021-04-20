import React from "react";
import '../css/App.css'
import '../css/reset.css'
import Product from 'components/Product'


const ProductList = ({ products }) => {
    const allProducts = products.map(({ name, image, brand, price }) => <Product name={name} image={image} brand={brand} price={price} />)
    return (
                <div class="results">
                    {allProducts}
                </div>
                
    )

}

export default ProductList