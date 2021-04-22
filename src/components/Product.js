import React from "react"
import {Link} from 'react-router-dom'
import 'css/reset.css'
import cart from 'img/cart.png'


const Product = ({data}) => {
    return(

        <article className="product">
            <img src={data.image} alt={data.name} className="product-img" />
            <div className="product-info">
                <h3><Link to={`/product/${data.slug}`}>{data.name} <span className="material-icons">favorite_border</span></Link></h3>
                <div className="ratings">
                    <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span>{data.rate}/5
                </div>
                <p>{data.brand}</p>
                <div className="product-footer"><data value="39"><ins>${data.price}</ins></data>
                    <a href="#" className="cart"><img src={cart} alt="shopping cart" /></a></div>
            </div>
        </article>
    )
}

export default Product