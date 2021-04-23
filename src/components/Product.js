import React from "react"
import {Link} from 'react-router-dom'
import 'css/reset.css'
import cart from 'img/cart.png'


const Product = ({product}) => {

    return(
        <article className="product">
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-info">
                <h3><Link to={`/product/${product.slug}`}>{product.name} <span className="material-icons">favorite_border</span></Link></h3>
                <div className="ratings">
                    <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span>{product.rate}/5
                </div>
                <p>{product.brand}</p>
                <div className="product-footer"><data value="39"><ins>${product.price}</ins></data>
                    <a href="#" className="cart"><img src={cart} alt="shopping cart" /></a></div>
            </div>
        </article>
    )
}

export default Product