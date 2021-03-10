import React from "react";
import '../css/App.css'
import '../css/reset.css'
import Product from 'components/Product'


const ProductList = ({ listProducts }) => {
    const products = listProducts.map(({ image, name, brand, price }) => <product image={image} name={name} brand={brand} blue={price} />)
    return (
        <div class="results">
            {products}
        </div>
    )
        
}

export default ProductList