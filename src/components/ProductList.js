import React from "react";
import '../css/App.css'
import '../css/reset.css'
import Product from 'components/Product'


const ProductList = ({ listProducts }) => {
    const products = listProducts.map(({ name, image, brand, price }) => <Product name={name} image={image} brand={brand} price={price} />)
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
                <div class="filters">
                    <div class="sort">
                        <label for="sort">Sort By</label>
                        <select name="sort" id="sort">
                            <option value="price-high">Most Popular</option>
                            <option value="price-high">Price, highest to lowest</option>
                            <option value="price-low">Price, lowest to highest</option>
                            <option value="newest">Newest releases</option>
                        </select>
                    </div>

                    <div class="filter-options">
                        <span class="material-icons">view_module</span>
                        <span class="material-icons">list</span>
                        <input type="search" name="find" id="find" placeholder="Search..." class="search" />
                    </div>
                </div>
                <div class="results">
                    {products}
                </div>
                <div class="more"><a href="#" class="btn-more">Load More</a></div>
            </section>
        </main>
    )

}

export default ProductList