import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import '../css/App.css'
import '../css/reset.css'
import AboutUs from 'components/AboutUs'
import Contact from 'components/Contact'
import HomePage from 'components/HomePage'
import ShopProducts from 'components/ShopProducts'
import ProductPage from 'components/ProductPage'


const App = () => {
    const allProducts = [
        {
            id: 101,
            slug: `raspberry-candle`,
            name: `Rasberry Candle`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: '../src/img/raspberyy-candle.png',
            rate: 5
        },
        {
            id: 102,
            slug: `ocean-breeze`,
            name: `Ocean Breeze`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: '../src/img/ocean-breeze.png',
            rate: 5
        },
        {
            id: 103,
            slug: `no1`,
            name: `No. 1`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: '../src/img/no1.png',
            rate: 5
        },
        {
            id: 104,
            slug: `nudesse-candle`,
            name: `Nudesse Candle`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: '../src/img/nudesse.png',
            rate: 5
        },
        {
            id: 105,
            slug: `firewood-figs`,
            name: `Firewood Figs`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: '../src/img/firewood-figs.png',
            rate: 5
        },
        {
            id: 106,
            slug: `pink-macaron`,
            name: `Pink Macaron`,
            price: 23.50,
            quantity: 5,
            brand: `Yummi Candles`,
            description: `Classic Rasberry scented candle with a hint of vanilla.`,
            image: '../src/img/pink-macaron.png',
            rate: 5
        }

    ]

    return (
        <Router>
            <header class="page-header">
                <Link to="/" class="logo">Daisy</Link>

                <button type="button" class="nav-toggle">
                    <span class="material-icons">menu</span>
                </button>
                <nav aria-label="Primary" class="navigation">
                    <ul class="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products" class="active">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <ul class="your-products">
                    <li><a href="#"><span class="material-icons">favorite_border</span></a></li>
                    <li><a href="#"><span class="material-icons">shopping_cart</span></a></li>
                    <li><a href="#" class="login">Login</a></li>
                </ul>
            </header>

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={Contact} />
                <Route path="/products"><ShopProducts products={allProducts}/> </Route>
                <Route path="/product/:slug"><ProductPage products={allProducts}/> </Route>
            </Switch>

            <footer class="page-footer">
                <nav class="footer-nav">
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
                        <li class="social-icon"><a href="#"><img src="./src/img/facebook.png" alt="facebook icon" /></a></li>
                        <li class="social-icon"><a href="#"><img src="./src/img/instagram.png" alt="instagram icon" /></a></li>
                        <li class="social-icon"><a href="#"><img src="./src/img/pinterest.png" alt="pinterest icon" /></a></li>
                        <li class="social-icon"><a href="#"><img src="./src/img/twitter.png" alt="twitter icon" /></a></li>
                    </ul>
                </nav>
                <p class="copyright">&copy; Daisy, Crafted with <span class="material-icons">favorite</span> by Clara Khast | All rights reserved.</p>
            </footer>
        </Router>
    )
}

export default App