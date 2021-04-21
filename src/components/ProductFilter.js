import React from 'react'
import '../css/App.css'
import '../css/reset.css'

const ProductFilter = () => {
    return (
        <div className="filters">
            <div className="sort">
                <label htmlFor="sort">Sort By</label>
                <select name="sort" id="sort">
                    <option value="price-high">Most Popular</option>
                    <option value="price-high">Price, highest to lowest</option>
                    <option value="price-low">Price, lowest to highest</option>
                    <option value="newest">Newest releases</option>
                </select>
            </div>

            <div className="filter-options">
                <span className="material-icons">view_module</span>
                <span className="material-icons">list</span>
                <input type="search" name="find" id="find" placeholder="Search..." className="search" />
            </div>
        </div>
    )
}

export default ProductFilter