import React from 'react'
import {useParams} from 'react-router-dom'
// import Product from 'components/Product'

const ProductPage = ({products}) => {

    const {slug} = useParams()

    const prod = products.find((prod) => prod.slug === slug) || products[0]

    return (
        <main>
            <h1>{prod.name}</h1>
            <img src={prod.image}/>
            <p>{prod.description}</p>
            <p>{prod.rate}</p>
            <p>{prod.brand}</p>
            <p>{prod.price}</p>
            {/* <Product data={prod}></Product> */}
        </main>
    )
}

export default ProductPage