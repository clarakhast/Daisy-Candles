import React from "react";
import '../css/App.css'
import '../css/reset.css'
import Product from 'components/Product'
// import {Pagination} from 'antd'
// import 'antd/dist/antd.css'


const ProductList = ({ products }) => {
    const allProducts = products.map((product) => <Product key={product.id} data={product}/>)
    // const [pageWereOn, setPageWereoN]= useState(1)

    return (
                <div className="results">
                    {allProducts}
                    {/* <Pagination defaultCurrent={1} total={16} defaultPageSize={6}/> */}
                </div>
                
    )

}

export default ProductList