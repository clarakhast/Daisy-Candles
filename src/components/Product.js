import React from "react"
import {Link} from 'react-router-dom'
import '../css/App.css'
import '../css/reset.css'
import cart from 'img/cart.png'


const Product = ({data}) => {
    return(

        <article class="product">
            <img src={data.image} alt={data.name} class="product-img" />
            <div class="product-info">
                <h3><Link to={`/product/${data.slug}`}>{data.name} <span class="material-icons">favorite_border</span></Link></h3>
                <div class="ratings">
                    <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span>
                </div>
                <p>{data.brand}</p>
                <div class="product-footer"><data value="39"><ins>${data.price}</ins></data>
                    <a href="#" class="cart"><img src={cart} alt="shopping cart" /></a></div>
            </div>
        </article>
    )
}

export default Product