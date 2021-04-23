import React, { useState } from "react";
import 'css/reset.css'
import Product from 'components/Product'
import { PRODUCT_PER_PAGE } from 'util/constants'

const ProductList = ({ products, page }) => {

    const startIndex = (page - 1) * PRODUCT_PER_PAGE
    const selectedProducts = products.slice(startIndex, startIndex + PRODUCT_PER_PAGE)
    const allProducts = selectedProducts.map((product) =><Product product={product} key={product.id} />
    )

    return (


        <div className="results">
            {allProducts}
        </div>

    )

}

export default ProductList