import React, { useContext, useEffect, useState } from 'react'
import ProductContext from 'contexts/product'
import ProductList from 'components/ProductList'
import ProductFilter from 'components/ProductFilter'
import Pagination from 'components/Pagination'
import { PRODUCT_PER_PAGE } from 'util/constants'

const ShopProducts = () => {

    const products = useContext(ProductContext)
    const [productsResults, setProductsResults] = useState(products)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const [filters, setFilters] = useState({
        query: ``,
        sortBy: `none`

    })

    useEffect(() => {

        setTotalPages(Math.ceil(products.length / PRODUCT_PER_PAGE))

        // Creat a clone Array
        let filteredProducts = [...products]

        // Check all the filters
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
            case `alphabet`:
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case `r-alphabet`:
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
                break;
        }

        // Assign the filtered products to the result state
        setProductsResults(filteredProducts)

    }, [filters])

    const handleClick = num => {
        setPage(num);
    }

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
                <ProductList products={productsResults} page={page} />
                <div className="pagination-container">
                    <Pagination totalPages={totalPages} handleClick={handleClick} />
                </div>


            </section>
        </main>
    )
}

export default ShopProducts