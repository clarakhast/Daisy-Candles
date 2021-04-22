import React from 'react'
import 'css/reset.css'

const ProductFilter = ({filters, setFilters}) => {
    return (
        <div className="filters">
            <div className="sort">
                <label htmlFor="sort">Sort By</label>
                <select name="sort" id="sort" defaultValue={filters.sortBy} onChange={(event)=> {
                    setFilters({
                        ...filters,
                        sortBy: event.target.value
                    })
                }}>
                    <option value="rating">Most Popular</option>
                    <option value="price-high">Price, highest to lowest</option>
                    <option value="price-low">Price, lowest to highest</option>
                    {/* <option value="alphabet">Name (A-Z)</option>
                    <option value="r-alphabet">Name (Z-A)</option> */}
                </select>
            </div>

            {/* <div className="sort">
                <label htmlFor="brand">Brand</label>
                <select name="brand" id="brand" defaultValue={filters.brand} onChange={(event)=> {
                    setFilters({
                        ...filters,
                        brand: event.target.value
                    })
                }}>
                    <option value="all">All Brands</option>
                    <option value="yummi">Yummi Candles</option>
                    <option value="home">Home Candles</option>
                    <option value="french">French Candles</option>
                    <option value="magic">Magic Candles</option>
                    <option value="dorota">Dorota</option>
                    <option value="lychee">D'anjou Lychee</option>
                    <option value="pecksniffs">Pecksniffs</option>
                    <option value="pairfum">Pairfum Candles</option>
                    <option value="champagne">Champagne</option>
                </select>
            </div> */}

            <div className="filter-options">
                <span className="material-icons">view_module</span>
                <span className="material-icons">list</span>
                <input type="search" name="find" placeholder="Search..." className="search" value={filters.query} onChange={(event) => {
                    setFilters({
                        ...filters,
                        query: event.target.value
                    })
                }} />
            </div>
        </div>
    )
}

export default ProductFilter