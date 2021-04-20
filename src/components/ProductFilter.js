import React from 'react'
import '../css/App.css'
import '../css/reset.css'

const ProductFilter = () => {
    return (
        <div class="filters">
            <div class="sort">
                <label for="sort">Sort By</label>
                <select name="sort" id="sort">
                    <option value="price-high">Most Popular</option>
                    <option value="price-high">Price, highest to lowest</option>
                    <option value="price-low">Price, lowest to highest</option>
                    <option value="newest">Newest releases</option>
                </select>
            </div>

            <div class="filter-options">
                <span class="material-icons">view_module</span>
                <span class="material-icons">list</span>
                <input type="search" name="find" id="find" placeholder="Search..." class="search" />
            </div>
        </div>
    )
}

export default ProductFilter