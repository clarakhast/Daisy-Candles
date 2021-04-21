import React, { useContext, useEffect, useState } from 'react'
import ProductContext from 'contexts/product'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'

const ShopProducts = () => {

    const products = useContext(ProductContext)
    const [productsResults, setProductsResults] = useState(products)

    const [filters, setFilters] = useState({
        query: ``,
        rating: `all`,
        sortBy: `rating`

    })

useEffect(() => {

    // Creat a clone Array
    let filteredProducts = [...products]

    // Check all the filters
    if (filters.rating !== `all`)
        filteredProducts = filteredProducts.filter((prod) => Number(prod.rating) >= Number(filters.rating))

    if (filters.query)
        filteredProducts = filteredProducts.filter((prod) => prod.name.toLowerCase().includes(filters.query.toLowerCase().trim()))

    // Sort if appropriate
    switch (filters.sortBy) {
        case `price-low`:
            filteredProducts.sort((a, b) => a.price - b.price)
            break;
        case `price-high`:
            filteredProducts.sort((a, b) => b.price - a.price)
            break;
        case `rating`:
            filteredProducts.sort((a, b) => b.rate - a.rate)
            break;
    }

    // Assign the filtered products to the result state
    setProductsResults(filteredProducts)

}, [filters])

return (
    <main>
        <header className="heading">
            <h1>Candles that <span>Everyone Loves!</span></h1>
            <p>We have a huge collection of candles in our branches.</p>
            <p>Our are always the best quality products.</p>
            <a href="#" className="intro-btn">Explore Products</a>
        </header>

        <section id="products">
            <h2>Our Products</h2>

            <ProductFilter filters={filters} setFilters={setFilters} />
            <ProductList products={productsResults} />
            <div className="more"><a href="#" className="btn-more">Load More</a></div>
        </section>
    </main>
)
}

export default ShopProducts