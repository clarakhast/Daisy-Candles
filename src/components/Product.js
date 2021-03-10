import React from "react"
import '../css/App.css'
import '../css/reset.css'
import cart from './../img/cart.png'


const Product = () => {
    return <>

        <article class="product">
            <img src={image} alt={image} class="product-img" />
            <div class="product-info">
                <h3>{name} <span class="material-icons">favorite_border</span></h3>
                <div class="ratings">
                    <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span>
                </div>
                <p>{brand}</p>
                <div class="product-footer"><data value="39"><ins>${price}</ins></data>
                    <a href="#" class="cart"><img src={cart} alt="shopping cart" /></a></div>
            </div>
        </article>
    </>
}

export default Product