import React from 'react'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'

const ShopProducts = ({products}) => {
    return (
        <main>
            <header class="heading">
                <h1>Candles that <span>Everyone Loves!</span></h1>
                <p>We have a huge collection of candles in our branches.</p>
                <p>Our are always the best quality products.</p>
                <a href="#" class="intro-btn">Explore Products</a>
            </header>

            <section id="products">
                <h2>Our Products</h2>

                <ProductFilter/>
                <ProductList products = {products} />
                <div class="more"><a href="#" class="btn-more">Load More</a></div>
            </section>
        </main>
    )
}

export default ShopProducts