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
import Navbar from './Nav/Navbar';
import Footer from './Footer';

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
                 <Navbar />
                </header>

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/products"><ShopProducts products={allProducts} /> </Route>
                    <Route path="/product/:slug"><ProductPage products={allProducts} /> </Route>
                    <Route path="*" component={Page404} />
                </Switch>

                <Footer/>
            </Router>
        </ProductContext.Provider>

    )
}

export default App