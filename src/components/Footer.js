import React from 'react';
import styled from 'styled-components';
import img from '../img/footer-bg.png'
import msg from '../img/message.png'

const Foot = styled.footer`
nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    font-size: 1rem;
    font-weight: 400;
    color:#ffffff;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    height:30rem;
    padding: 5rem 2rem;
    margin-top:3rem;
} 

nav ul li {
    padding:0.8rem 0.5rem;
}

nav ul li a{
    color:white;
}

nav ul li a:hover {
    color: var(--orange-color);
}

.list-heading {
    font-weight:700;
    font-size:1.4rem;
    position:relative;
    z-index : 1;
}

.list-heading:before{
    content : "";
    position: absolute;
    left    : 8px;
    bottom  : 0;
    height  : 1px;
    width   : 20%;  /* or 100px */
    border-bottom:1px solid white;
}

.email {
    padding:0.8rem;
    width:75%;
    border: 1px solid #F6F6F6;
    border-radius:20px;
    background-image: url(${msg});
    background-repeat: no-repeat;
    background-position: center right 3%;
    background-size: 28px;
}

.email::placeholder {
    color:#969494;
}

.social-icon {
    display:inline-block;
}

.copyright {
    background-color: var(--orange-color);
    margin:0;
    padding:1.5rem;
    text-align: center;
    font-weight:600;
}

.copyright > .material-icons {
    font-size: 1rem;
}
@media screen and (max-width: 46em){
nav ul:not(:last-child) {
        display:none;
    } 
nav{
        display:block;
    }
}
`

const Footer = () => {
    return (
        <Foot>
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
            </Foot>
  )

}

export default Footer