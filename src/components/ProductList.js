import React from "react";
import '../css/App.css'
import '../css/reset.css'
import Product from 'components/Product'


const ProductList = ({ products }) => {
    const allProducts = products.map((product) => <Product key={product.id} data={product}/>)
    return (
                <div class="results">
                    {allProducts}
                </div>
                
    )

}

export default ProductList