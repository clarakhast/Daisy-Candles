import React from 'react'
import ProductList from 'components/ProductList'
import '../css/App.css'
import '../css/reset.css'


const App = () => {
     const allProducts = [
        {
            id: 101,
            name: `Rasberry Candle`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: './src/img/raspberyy-candle.png',
            rate: 5
        },
        {
            id: 102,
            name: `Ocean Breeze`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: './src/img/ocean-breeze.png',
            rate: 5
        },
        {
            id: 103,
            name: `No. 1`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: './src/img/no1.png',
            rate: 5
        },
        {
            id: 104,
            name: `Nudesse Candle`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: './src/img/nudesse.png',
            rate: 5
        },
        {
            id: 105,
            name: `Firewood Figs`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: './src/img/firewood-figs.png',
            rate: 5
        },
        {
            id: 106,
            name: `Pink Macaron`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: './src/img/pink-macaron.png',
            rate: 5
        }

    ]

    return (
        <>
            <header class="page-header">
                <a href="index.html" class="logo">Daisy</a>

                <button type="button" class="nav-toggle">
                    <span class="material-icons">menu</span>
                </button>
                <nav aria-label="Primary" class="navigation">
                    <ul class="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#" class="active">Products</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <ul class="your-products">
                    <li><a href="#"><span class="material-icons">favorite_border</span></a></li>
                    <li><a href="#"><span class="material-icons">shopping_cart</span></a></li>
                    <li><a href="#" class="login">Login</a></li>
                </ul>
            </header>

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
                       <ProductList listProducts={allProducts}/>
                    <div class="more"><a href="#" class="btn-more">Load More</a></div>
                </section>
            </main>


            <footer class="page-footer">
                <nav>
                    <ul>
                        <li class="list-heading">Help & Support</li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Curbside Pick Up</a></li>
                        <li><a href="#">Shipping & Delivery</a></li>
                        <li><a href="#">Returns</a></li>
                    </ul>

                    <ul>
                        <li class="list-heading">Shopping Online</li>
                        <li><a href="#">Candle Care</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Guarantee</a></li>
                        <li><a href="#">Business Account</a></li>
                    </ul>

                    <ul>
                        <li class="list-heading">About Us</li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Find a Store</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>

                    <ul>
                        <li class="list-heading">Social</li>
                        <li>
                            <p>Sign up for emails to receive newsletters plus exclusive offers and discounts.</p>
                            <input type="email" name="email" id="email" placeholder="Enter your email" class="email" />
                        </li>
                        <li class="social-icon"><a href="#"><img src="./../img/facebook.png" alt="facebook icon" /></a></li>
                        <li class="social-icon"><a href="#"><img src="./../img/instagram.png" alt="instagram icon" /></a></li>
                        <li class="social-icon"><a href="#"><img src="./../img/pinterest.png" alt="pinterest icon" /></a></li>
                        <li class="social-icon"><a href="#"><img src="./../img/twitter.png" alt="twitter icon" /></a></li>
                    </ul>
                </nav>
                <p class="copyright">&copy; Daisy, Crafted with <span class="material-icons">favorite</span> by Clara Khast | All rights reserved.</p>
            </footer>
        </>
    )
}

export default App