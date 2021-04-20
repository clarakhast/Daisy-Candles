import React from 'react'
import {useParams} from 'react-router-dom'
import '../css/App.css'
import Product from 'components/Product'

const ProductPage = ({products}) => {

    const {slug} = useParams()

    const prod = products.find((prod) => prod.slug === slug) || products[0]

    return (
        <main>
            <h1>One Product</h1>
            <Product data={prod}></Product>
        </main>
    )
}

export default ProductPage