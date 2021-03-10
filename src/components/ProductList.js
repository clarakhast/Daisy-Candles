import React from "react";
import '../css/App.css'
import '../css/reset.css'
import Product from 'components/Product'


const ProductList = ({ listProducts }) => {
    const products = listProducts.map(({name, image, brand, price}) => <Product name={name} image={image} brand={brand} price={price}/>)
    return (
        <div class="results">
            {products}
        </div>
    )
        
}

export default ProductList