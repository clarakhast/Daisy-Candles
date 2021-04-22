import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ProductContext from 'contexts/product'
import firebase from 'util/firebase'
import 'css/reset.css'
import AboutUs from 'pages/AboutUs'
import Contact from 'pages/Contact'
import HomePage from 'pages/HomePage'
import ShopProducts from 'pages/ShopProducts'
import ProductPage from 'pages/ProductPage'
import Page404 from 'pages/Page404'

function getProducts() {
    const [allProducts, setProducts] = useState([])

    useEffect(() => {
        firebase.firestore().collection('Candles').onSnapshot((snapshot) => {
            const newProducts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setProducts(newProducts)
        })
    }, [])
    return allProducts
}
const App = () => {

    const allProducts = getProducts()

    return (
        <ProductContext.Provider value={allProducts}>
            <Router>
                <header className="page-header">
                    <Link to="/" className="logo">Daisy</Link>

                    <button type="button" className="nav-toggle">
                        <span className="material-icons">menu</span>
                    </button>
                    <nav aria-label="Primary" className="navigation">
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products" className="active">Products</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                    <ul className="your-products">
                        <li><a href="#"><span className="material-icons">favorite_border</span></a></li>
                        <li><a href="#"><span className="material-icons">shopping_cart</span></a></li>
                        <li><a href="#" className="login">Login</a></li>
                    </ul>
                </header>

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/products"><ShopProducts products={allProducts} /> </Route>
                    <Route path="/product/:slug"><ProductPage products={allProducts} /> </Route>
                    <Route path="*" component={Page404} />
                </Switch>

                <footer className="page-footer">
                    <nav className="footer-nav">
                        <ul>
                            <li className="list-heading">Help & Support</li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Curbside Pick Up</a></li>
                            <li><a href="#">Shipping & Delivery</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>

                        <ul>
                            <li className="list-heading">Shopping Online</li>
                            <li><a href="#">Candle Care</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Guarantee</a></li>
                            <li><a href="#">Business Account</a></li>
                        </ul>

                        <ul>
                            <li className="list-heading">About Us</li>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Find a Store</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>

                        <ul>
                            <li className="list-heading">Social</li>
                            <li>
                                <p>Sign up for emails to receive newsletters plus exclusive offers and discounts.</p>
                                <input type="email" name="email" id="email" placeholder="Enter your email" className="email" />
                            </li>
                            <li className="social-icon"><a href="#"><img src="src/img/facebook.png" alt="facebook icon" /></a></li>
                            <li className="social-icon"><a href="#"><img src="src/img/instagram.png" alt="instagram icon" /></a></li>
                            <li className="social-icon"><a href="#"><img src="src/img/pinterest.png" alt="pinterest icon" /></a></li>
                            <li className="social-icon"><a href="#"><img src="src/img/twitter.png" alt="twitter icon" /></a></li>
                        </ul>
                    </nav>
                    <p className="copyright">&copy; Daisy, Crafted with <span className="material-icons">favorite</span> by Clara Khast | All rights reserved.</p>
                </footer>
            </Router>
        </ProductContext.Provider>

    )
}

export default App