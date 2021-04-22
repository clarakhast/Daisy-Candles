import React from 'react'
import { Link, useParams } from 'react-router-dom'
import 'css/ProductPage.css'

const ProductPage = ({ products }) => {

    const { slug } = useParams()

    const prod = products.find((prod) => prod.slug === slug) || products[0]

    return (
        <main className="product-container">
            <div className="product-image">
                <img src={prod.image} />
            </div>

            <div className="product-info">
                <h1>{prod.name}</h1>
                <div className="ratings">
                    <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span> {prod.rate}
                </div>
                <p>{prod.description}</p>
                <p className="brand">Made By: {prod.brand}</p>
                <p className="price">Price: ${prod.price}</p>
                <p>{prod.quantity} left in stock</p>
                <a className="cart-btn">Add to Cart</a>
            </div>

        </main>
    )
}

export default ProductPage